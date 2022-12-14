import {Box, Button, Paper, Typography} from "@mui/material";
import {FormProvider, RHFTextField} from "../../../components/hook-form";
import {useForm} from "react-hook-form";
import {FormSchema, FormValuesProps} from "./FormType";
import {yupResolver} from "@hookform/resolvers/yup";


export default function FormContact() {
  const defaultValues = {
    name: '',
    email: '',
    message: '',
  }

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(FormSchema),
    mode: 'onTouched',
    defaultValues,
  });

  const {handleSubmit, reset} = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_web3forms_key,
          name: data.name,
          email: data.email,
          message: data.message,
        })
      });
      const json = await response.json();
      if (json.success) {
        reset(defaultValues);
        alert("Mensagem enviada com sucesso!");
      }
    } catch (error) {
      console.log(error);
    }

    //@ts-ignore
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box display={'flex'} flexDirection={'column'} component={Paper} elevation={5} p={3}>
        <Typography variant={'h5'}>ou se preferir pode me mandar uma mensagem pelo formulário abaixo:</Typography>

        <RHFTextField name={'name'} label={'Nome'} variant={'outlined'} sx={{mt: '2rem'}}/>
        <RHFTextField name={'email'} label={'Email'} variant={'outlined'} sx={{mt: '2rem'}}/>
        <RHFTextField name={'message'} label={'Mensagem'} variant={'outlined'} sx={{mt: '2rem'}} multiline
                      rows={4}/>
        <Button type={'submit'} size={'large'} variant={'contained'} sx={{mt: '2rem'}}>Enviar</Button>
      </Box>
    </FormProvider>
  )
}