import { useTranslation } from 'react-i18next';
import { View, Text } from '@/components';

const ThreeScreen = () => {
  const { t } = useTranslation();
  return (
    <View>
      <Text>{t('three')}</Text>
    </View>
  );
};

export default ThreeScreen;
