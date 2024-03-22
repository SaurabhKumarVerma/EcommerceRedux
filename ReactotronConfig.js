import AsyncStorage from "@react-native-async-storage/async-storage";
import Reactotron, {
  networking,
  trackGlobalErrors,
} from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";

const reactotron = Reactotron.configure({
  name: require("./package.json").name,
  onConnect: () => {
    Reactotron.clear();
  },
})
  .useReactNative({
    asyncStorage: AsyncStorage,
    networking: true,
    editor: false, // there are more options to editor
    overlay: false, // just turning off overlay
  })
  .use(reactotronRedux())
  .connect();

export default reactotron;
