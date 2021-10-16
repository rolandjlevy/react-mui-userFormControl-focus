import React, { useMemo } from 'react';
import { 
  useFormControl, 
  FormControl,
  OutlinedInput,
  Box,
  FormHelperText
} from '@mui/material';

function MyFormHelperText() {
  const { focused } = useFormControl() || {};
  const helperText = useMemo(() => {
    if (focused) {
      return 'This field is being focused';
    }
    return 'Helper text';
  }, [focused]);
  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function FieldFocus() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{ width: '25ch' }}>
        <OutlinedInput placeholder="Please enter text" />
        <MyFormHelperText />
      </FormControl>
    </Box>
  );
}
