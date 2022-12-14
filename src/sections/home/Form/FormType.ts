import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
  name: Yup.string().required('Nome contato é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  message: Yup.string().required('Mensagem é obrigatório'),
});

export type FormValuesProps = {
  name: string,
  email: string,
  message: string,
  access_key: string,
}