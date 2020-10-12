import { i18n, withTranslation } from '../i18n';
const Form = (props) => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder={props.t("City")} />
        <input type="text" name="country" placeholder={props.t("Country")} />
        <button>{props.t('Get Weather')}</button>
    </form>
);

export default withTranslation('common')(Form);