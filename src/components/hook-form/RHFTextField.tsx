// form
import {useFormContext, Controller} from 'react-hook-form';
// @mui
import {TextField, TextFieldProps} from '@mui/material';
import {styled} from "@mui/system";

// ----------------------------------------------------------------------

const StyledTextField = styled(TextField)(({theme}) => ({
  [theme.breakpoints.down('md')]: {
    "& .MuiFormHelperText-root": {
      fontSize: '14px',
    }
  },
}));

// ----------------------------------------------------------------------

type IProps = {
  name: string;
};

type Props = IProps & TextFieldProps;

export default function RHFTextField({name, ...other}: Props) {
  const {control} = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({field, fieldState: {error}}) => (
        <StyledTextField
          {...field}
          fullWidth
          variant={'filled'}
          value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
}
