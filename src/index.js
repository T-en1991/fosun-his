import Button from '../packages/button/index.js';
import ButtonGroup from '../packages/button-group/index.js';
import Row from '../packages/row/index.js';
import Tooltip from '../packages/tooltip/index.js';
import Scrollbar from '../packages/scrollbar/index.js';
import Backtop from '../packages/backtop/index.js';
import Icon from '../packages/icon/index.js';
import Input from '../packages/input/index.js';
import Autocomplete from '../packages/autocomplete/index.js';
import Popover from '../packages/popover/index.js';
import CollapseTransition from 'fosun-his/src/transitions/collapse-transition';

const components = [
  Button,
  ButtonGroup,
  Row,
  Tooltip,
  Scrollbar,
  Backtop,
  Icon,
  Input,
  Autocomplete,
  Popover,
  CollapseTransition
];
const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};
export default {
  version: '1.0.0',
  install,
  CollapseTransition,
  Button,
  ButtonGroup,
  Row,
  Tooltip,
  Scrollbar,
  Backtop,
  Icon,
  Input,
  Autocomplete,
  Popover
};
