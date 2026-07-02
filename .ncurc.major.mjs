import minorConfig from './.ncurc.minor.mjs';

export default {
  ...minorConfig,
  reject: [...minorConfig.reject],
  target: 'latest',
};
