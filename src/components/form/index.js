import WInternalForm from './WInternalForm';
import InternalItem from './WInternalFormItem';
import InternalTextItem from './WInternalFormTextItem';


const WForm = WInternalForm;

WForm.Item = InternalItem;
WForm.Text = InternalTextItem;

export default WForm;