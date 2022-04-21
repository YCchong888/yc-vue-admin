import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { setupStore } from "./store";
import 'ant-design-vue/dist/antd.css';
import { Layout, Form, Input, Button, Select, Checkbox, Row, Col, Menu } from "ant-design-vue";
const app = createApp(App)
app.use(router)
  .use(Layout)
  .use(Form)
  .use(Input)
  .use(Button)
  .use(Select)
  .use(Checkbox)
  .use(Row)
  .use(Col)
  .use(Menu)
setupStore(app)
app.mount("#app");

