import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueMq from 'vue-mq'
import VueSlimScroll from 'vue-slimscroll'
import routes from './routes/routes'
import './assets/scss/app.scss'
import { LineChart } from "./components/charts/charts";
//Tags 
//https://github.com/voerro/vue-tagsinput
import VoerroTagsInput from '@voerro/vue-tagsinput'
Vue.component('tags-input', VoerroTagsInput);
import '@voerro/vue-tagsinput/dist/style.css'


/**
 * Plugin Name:      ElementUI
 * Plugin Url:       https://element.eleme.io/
 * Documentation:    https://element.eleme.io//#/en-US/guide/design
 * 
 */

// import ElementUI from 'element-ui';


// Vue.use(ElementUI);
import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  PageHeader,
  CascaderPanel,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui';

// Vue.use(Pagination);
// Vue.use(Dialog);
// Vue.use(Autocomplete);
// Vue.use(Dropdown);
// Vue.use(DropdownMenu);
// Vue.use(DropdownItem);
// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(MenuItemGroup);
// Vue.use(Input);
 Vue.use(InputNumber);
// Vue.use(Radio);
// Vue.use(RadioGroup);
// Vue.use(RadioButton);
// Vue.use(Checkbox);
// Vue.use(CheckboxButton);
// Vue.use(CheckboxGroup);
// Vue.use(Switch);
// Vue.use(Select);
// Vue.use(Option);
// Vue.use(OptionGroup);
Vue.use(Button);
// Vue.use(ButtonGroup);
// Vue.use(Table);
// Vue.use(TableColumn);
// Vue.use(DatePicker);
// Vue.use(TimeSelect);
// Vue.use(TimePicker);
// Vue.use(Popover);
// Vue.use(Tooltip);
// Vue.use(Breadcrumb);
// Vue.use(BreadcrumbItem);
// Vue.use(Form);
// Vue.use(FormItem);
// Vue.use(Tabs);
// Vue.use(TabPane);
// Vue.use(Tag);
// Vue.use(Tree);
// Vue.use(Alert);
// Vue.use(Slider);
// Vue.use(Icon);
// Vue.use(Row);
// Vue.use(Col);
// Vue.use(Upload);
// Vue.use(Progress);
// Vue.use(Spinner);
// Vue.use(Badge);
// Vue.use(Card);
// Vue.use(Rate);
// Vue.use(Steps);
// Vue.use(Step);
// Vue.use(Carousel);
// Vue.use(CarouselItem);
// Vue.use(Collapse);
// Vue.use(CollapseItem);
// Vue.use(Cascader);
// Vue.use(ColorPicker);
// Vue.use(Transfer);
// Vue.use(Container);
// Vue.use(Header);
// Vue.use(Aside);
// Vue.use(Main);
// Vue.use(Footer);
// Vue.use(Timeline);
// Vue.use(TimelineItem);
// Vue.use(Link);
// Vue.use(Divider);
// Vue.use(Image);
// Vue.use(Calendar);
// Vue.use(Backtop);
// Vue.use(PageHeader);
// Vue.use(CascaderPanel);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
import 'element-ui/lib/theme-chalk/index.css';

import CKEditor from '@ckeditor/ckeditor5-vue';
Vue.use( CKEditor );

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueSlimScroll);
Vue.use(VueMq, {
  breakpoints: {
    sm: 450,
    md: 750,
    lg: Infinity,
  }
});




Vue.config.productionTip = false



const router = new VueRouter({routes })



window.vm = new Vue({
  render: h => h(App),
  router,
  component: {
    LineChart
  },
  beforeCreate: function() {
    // const el = document.body;
    // this.toggleClass(el, 'sidebar-mini');
    // this.toggleClass(el, 'sidebar-collapse');
    document.body.className = 'sidebar-mini sidebar-collapse';
},
  methods: {
    totalCounter() {
      alert("hi");
    }
  }
}).$mount('#app')
