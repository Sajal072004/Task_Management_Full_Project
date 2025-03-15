export const ProviderEnum = {
  GOOGLE: 'google',
  GITHUB: 'github',
  FACEBOOK: 'facebook',
  EMAIL: 'email',
  
}

export type ProviderEnumType = keyof typeof ProviderEnum;