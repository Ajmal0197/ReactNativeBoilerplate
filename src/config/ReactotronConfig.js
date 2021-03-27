import Reactotron, { asyncStorage } from 'reactotron-react-native'
import sagaPlugin from 'reactotron-redux-saga';
import { reactotronRedux } from 'reactotron-redux'

Reactotron.configure({ name: 'ReinventAuction' })
  .useReactNative()
  .use(sagaPlugin())
  .use(reactotronRedux()) //  <- here i am!
  .use(asyncStorage()) // <--- here we go!
  .connect();

const yeOldeConsoleLog = console.log;
// make a new one
console.log = (...args) => {
  // always call the old one, because React Native does magic swizzling too
  yeOldeConsoleLog(...args);
  // send this off to Reactotron.
  Reactotron.display({
    name: 'CONSOLE',
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
  });
};

export default Reactotron
