import * as React from "react";
import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { validUserSchema } from "../../../../../common/dist";
import { View } from "react-native";
import { InputField } from "../../shared/InputField";
import {Button, Card, Text} from 'react-native-elements';
import { Link } from 'react-router-native';

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={{ 
        flex:1,
        display:"flex",
        justifyContent:"center"
      }}>
        <Text style={{fontSize:30, marginBottom:20, textAlign:'center', fontWeight:'bold'}}>Welcome to Airbnb</Text>
        <Card>
          <Text style={{fontSize:25, marginBottom:10}}>Register</Text>
          <Field 
            name="email" 
            placeholder="Email" 
            component={InputField} 
            containerStyle={{width:"100%", marginBottom:10}} 
            autoCapitalize="none"
          />
          <Field
            name="password"
            secureTextEntry={true}
            placeholder="Password"
            component={InputField}
            containerStyle={{width:"100%",marginBottom:10}}
            autoCapitalize="none"
          />
          <Button title="Submit" onPress={handleSubmit as any} />
          <Link
            to={`/login`}
            underlayColor='#fff'>
              <Text style={{fontSize:16,marginTop:10,color:'blue'}}>Or login now</Text>
          </Link>
        </Card>
      </View>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);