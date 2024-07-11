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
    def get(self):
        services = [service.to_dict() for service in Service.query.all()]
        return make_response(services, 200)
    def post(self,service_id):
        data = request.get_json()
        service = Service.query.filter_by(id=service_id).first()
        patient = Patient.query.filter(Patient.id == data['patient_id']).first()
        if patient and service:
            
            return make_response(bill_service.to_dict(), 201)
            
       
        
        


api.add_resource(Patient_creation,'/patient', endpoint='patient')
api.add_resource(checkSession,'/checkSession', endpoint='checkSession')
api.add_resource(login,'/login', endpoint='login')
api.add_resource(check_username,'/check_username', endpoint='check_username')
api.add_resource(services_offered,'/services_offered', endpoint='services_offered')
if __name__ == '__main__':
    app.run(port=5555, debug=True)

