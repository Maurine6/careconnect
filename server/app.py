#!/usr/bin/env python3

from flask import Flask, make_response,jsonify,session,request
from flask_restful import Resource

from config import app,db,api
from models import Admin, Patient,Bill,BillService


from models import db,Patient,Service

class Patient_creation(Resource):
    def post(self):
        data = request.get_json()
        patient = Patient(
            first_name=data['first_name'],
            last_name=data['last_name'],
            username =data['username'],
            date_of_birth=data['date_of_birth'],
            contact_number=data['contact_number'],
            email=data['email']
        )
        patient.password_hash =data['password_hash']
        db.session.add(patient)
        db.session.commit()
        session['id']= patient.id
        return make_response(patient.to_dict(), 201)
    


class checkSession(Resource):
    def get(self):
        id = session.get('id')
        if id:
            patient = Patient.query.filter_by(id=id).first()
            return patient.to_dict(),200
        else:
            return {"message":"Session expired"},401
    
class login(Resource):
    def post(self):
        data = request.get_json()
        patient = Patient.query.filter_by(username=data['username']).first()
        if patient and patient.authenticate(data['password_hash']):
            session['id'] = patient.id
            return patient.to_dict(),200
        else:
            return {"message":"Invalid username or password"},401
class check_username(Resource):
    def post(self):
        data = request.get_json()
        patient = Patient.query.filter_by(username=data['username']).first()
        if patient:
            return {"message":"Username already exists"},409
        else:
            return {"message":"Username available"},200       
class services_offered(Resource):
    def get(self,patient_id):
        services = [service.to_dict() for service in Bill.query.filter(Bill.patient_id ==patient_id).all()]
        return make_response(services, 200)
    def post(self,patient_id):
        data = request.get_json()
        service = Service.query.filter(Service.id == data['service_id']).first()
        patient = Patient.query.filter(Patient.id == patient_id).first()
        if patient and service:
            bill = Bill(
                patient_id = patient_id
            )
            db.session.add(bill)
            db.session.commit()
            bill_service = BillService(
                bill_id = bill.id,
                service_id = data['service_id']
                )
            db.session.add(bill_service)
            db.session.commit()
            return make_response(bill_service.to_dict(), 201)
        else:
            return {"message":"Invalid patient or service"},404
    def patch(self,patient_id):
        data = request.get_json()
        bill = Bill.query.filter(Bill.id == data['bill_id']).first()
        if bill:
            bill.status = data['status']
            db.session.commit()
            return make_response(bill.to_dict(), 200)
        else:
            return {"message":"Invalid patient"},404
    def delete(self,patient_id):
        bill = Bill.query.filter_by(id = patient_id).first()
        if bill:
            db.session.delete(bill)
            db.session.commit()
            return {"message":"Bill deleted"},200
        else:
            return {"message":"Invalid bill"},404
class services_data(Resource):
    def get(self):
        services = [service.to_dict() for service in Service.query.all()]
        return make_response(services, 200)
    def post(self):
        data = request.get_json()
        service = Service(
            name=data['name'],
            price=data['price'],
            description=data['description']
        )
        db.session.add(service)
        db.session.commit()
        return make_response(service.to_dict(), 201)
    def patch(self, service_id):
        data = request.get_json()
        service = Service.query.filter_by(id=service_id).first()
        if service:
            service.name = data['name']
            service.price = data['price']
            service.description = data['description']
            db.session.commit()
            return make_response(service.to_dict(), 200)
        else:
            return {"message":"Invalid service"},404
    def delete(self, service_id):
        service = Service.query.filter_by(id=service_id).first()
        if service:
            db.session.delete(service)
            db.session.commit()
            return {"message":"Service deleted"},200
        else:
            return {"message":"Invalid service"},404
        
            
       
        
        


api.add_resource(Patient_creation,'/patient', endpoint='patient')
api.add_resource(checkSession,'/checkSession', endpoint='checkSession')
api.add_resource(login,'/login', endpoint='login')
api.add_resource(check_username,'/check_username', endpoint='check_username')
api.add_resource(services_offered,'/services_offered/<int:patient_id>', endpoint='services_offered')
api.add_resource(services_data,'/services_data', endpoint='services_data')
if __name__ == '__main__':
    app.run(port=5555, debug=True)

