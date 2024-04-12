import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "../../constent/theme";
import CustomTextInput from "../../common/CustomTextInput";
import CustomButton from "../../common/CustomButton";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import {
  TLoginCredential,
  getUserToken,
  login,
  password,
  userName,
} from "../../redux/slices/AuthSlices";
import Loader from "../../common/Loader";

type Props = {};

// alert-circle
// checkmark-sharp
const Login = (props: Props) => {
  // const [email, setEmail] = useState<string>();
  // const [password, setPassword] = useState<string>();
  const loginuser = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {}, []);

  const onSubmit = () => {
    let param: TLoginCredential = {
      username: loginuser.userName,
      password: loginuser.password,
    };
    dispatch(login({ ...param }));
  };

  const onChangeUserName = (text: string) => {
    // setEmail(text);
    dispatch(userName(text));
  };
  const onChangePassword = (text: string) => {
    // setPassword(text);
    dispatch(password(text));
  };

  const isLoading = () => {
    if (loginuser.isLoading) {
      return <Loader isVisible={loginuser.isLoading} />;
    } else {
      return null;
    }
  };

  console.log("====================================");
  console.log(loginuser.isTokenAvailable);
  console.log("====================================");
  return (
    <View style={{ marginHorizontal: 16 }}>
      {isLoading()}
      <View style={{ marginTop: "80%" }}>
        <Text style={{ fontWeight: "800", fontSize: 18 }}>Welcome!</Text>
        <Text style={{ color: colors.lightGray, marginTop: 10 }}>
          please login or signup to continue or app
        </Text>
      </View>

      <View style={{ marginTop: 40 }}>
        <View>
          <CustomTextInput
            title="Email"
            isError={false}
            placeholder="Enter Email"
            onChangeText={(text) => onChangeUserName(text)}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <CustomTextInput
            title="Password"
            isError={false}
            placeholder="Enter Password"
            onChangeText={(text) => onChangePassword(text)}
            secureTextEntry
          />
        </View>
      </View>
      <View style={{ marginTop: "20%" }}>
        <CustomButton label="Login" onClick={() => onSubmit()} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
