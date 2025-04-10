import { FormData } from '../types';
import emailjs from '@emailjs/browser';

// Configuração para EmailJS
// Substitua estas informações pelas suas credenciais do EmailJS
const SERVICE_ID = 'seu_service_id'; // Ex: service_abc123
const TEMPLATE_ID = 'seu_template_id'; // Ex: template_xyz789
const USER_ID = 'seu_user_id'; // Ex: user_987xyz

// Função para enviar o email
export const sendEmail = async (formData: FormData): Promise<boolean> => {
  try {
    // Para usar EmailJS, você precisará instalar o pacote e importá-lo:
    // npm install @emailjs/browser
    // import emailjs from '@emailjs/browser';
    // emailjs.init(USER_ID);
    
    // Simulação do envio de email (remova este código ao implementar o EmailJS real)
    console.log('Simulando envio de email com os dados:', formData);
    
    // Descomente o código abaixo e remova a simulação quando estiver pronto para implementar
    /*
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message
    });
    
    console.log('Email enviado com sucesso!', response.status, response.text);
    */
    
    // Simulando um envio bem-sucedido
    return true;
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return false;
  }
};