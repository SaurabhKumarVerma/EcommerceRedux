// withNetworkState.tsx

import React from "react";
import { useSelector } from "react-redux"; // Assuming RootState is defined in your reducers
import { RootState } from "../redux/store";
import Lottie from "./Lottie";
import Retry from "./Retry";
import { SafeAreaView, View } from "react-native";

interface WithNetworkStateProps {
  loading: boolean;
  error: boolean;
}

const ECommHoc = <P extends WithNetworkStateProps>(
  Component: React.ComponentType<P>
) => {
  const ECommHoc: React.FC<Omit<P, keyof WithNetworkStateProps>> = (props) => {
    const network = useSelector(
      (state: RootState) => state.network.isConnected
    );

    if (!network || network === undefined) {
      return (
        <View style={{}}>
          <Retry />
        </View>
      );
    }

    return <Component {...(props as P)} />;
  };

  return ECommHoc;
};

export default ECommHoc;
