""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '23871b2da032'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('admins',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=50), nullable=False),
    sa.Column('_password_hash', sa.String(), nullable=True),
    sa.Column('role', sa.String(length=20), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('doctors',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=50), nullable=False),
    sa.Column('last_name', sa.String(length=50), nullable=False),
    sa.Column('specialization', sa.String(length=100), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('patients',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(length=50), nullable=False),
    sa.Column('last_name', sa.String(length=50), nullable=False),
    sa.Column('username', sa.String(length=50), nullable=True),
    sa.Column('_password_hash', sa.String(), nullable=True),
    sa.Column('date_of_birth', sa.Integer(), nullable=False),
    sa.Column('contact_number', sa.String(length=20), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=True),
    sa.Column('role', sa.String(length=20), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('services',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('description', sa.String(length=500), nullable=True),
    sa.Column('price', sa.Float(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('appointments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('patient_id', sa.Integer(), nullable=False),
    sa.Column('doctor_id', sa.Integer(), nullable=False),
    sa.Column('appointment_date', sa.DateTime(), nullable=False),
    sa.Column('reason', sa.String(length=200), nullable=True),
    sa.Column('status', sa.String(length=20), nullable=True),
    sa.ForeignKeyConstraint(['doctor_id'], ['doctors.id'], name=op.f('fk_appointments_doctor_id_doctors')),
    sa.ForeignKeyConstraint(['patient_id'], ['patients.id'], name=op.f('fk_appointments_patient_id_patients')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('bills',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('patient_id', sa.Integer(), nullable=False),
    sa.Column('bill_date', sa.DateTime(), nullable=True),
    sa.Column('amount', sa.Float(), nullable=False),
    sa.Column('status', sa.String(length=20), nullable=True),
    sa.ForeignKeyConstraint(['patient_id'], ['patients.id'], name=op.f('fk_bills_patient_id_patients')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('bill_services',
    sa.Column('bill_id', sa.Integer(), nullable=False),
    sa.Column('service_id', sa.Integer(), nullable=False),
    sa.Column('quantity', sa.Integer(), nullable=True),
    sa.Column('notes', sa.String(length=200), nullable=True),
    sa.ForeignKeyConstraint(['bill_id'], ['bills.id'], name=op.f('fk_bill_services_bill_id_bills')),
    sa.ForeignKeyConstraint(['service_id'], ['services.id'], name=op.f('fk_bill_services_service_id_services')),
    sa.PrimaryKeyConstraint('bill_id', 'service_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('bill_services')
    op.drop_table('bills')
    op.drop_table('appointments')
    op.drop_table('services')
    op.drop_table('patients')
    op.drop_table('doctors')
    op.drop_table('admins')
    # ### end Alembic commands ###
