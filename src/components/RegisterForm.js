import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Definindo o esquema de validação com Yup
const validationSchema = Yup.object({
    username: Yup.string().min(5, 'Nome de usuário deve ter pelo menos 5 caracteres').required('Nome de usuário é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    password: Yup.string().min(6, 'Senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória')
});

const RegisterForm = () => {
    const handleSubmit = async (values) => {
        try {
            // Envie os dados para o backend
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            });
            if (response.ok) {
                alert('Registro bem-sucedido. Verifique seu e-mail para confirmar o registro.');
            } else {
                alert('Erro ao registrar usuário.');
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (
        <Formik
            initialValues={{ username: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <label htmlFor="username">Nome de usuário</label>
                    <Field type="text" id="username" name="username" />
                    <ErrorMessage name="username" component="div" />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                </div>

                <div>
                    <label htmlFor="password">Senha</label>
                    <Field type="password" id="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                </div>

                <button type="submit">Registrar</button>
            </Form>
        </Formik>
    );
};

export default RegisterForm;
