import { Title } from '@material-ui/icons';
import { i18n, withTranslation } from '../i18n';
const Titles = ({ t }) => (
    <div>
        <h1 className="title-container__title">{t('Welcome to Diagonal Weather Forcaster')}</h1>
        <h3 className="title-container__subtitle">{t("Find out your's local weather")}</h3>
    </div>
);

export default withTranslation('common')(Titles);