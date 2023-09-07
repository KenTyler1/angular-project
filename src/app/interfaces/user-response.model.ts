export interface TokenSessionResponse {
    status: number;
    message: string;
    data: string;
}

export interface UserResponse {
  status: number;
  message: string;
  data: UserData;
}

export interface UserData {
  access_token: string;
  address_full_text: string;
  advert_package_for_business_type_id: number;
  advert_package_for_premium_type_id: number;
  advert_package_status: number;
  apple_uid: string;
  auth_type: number;
  avatar: AvatarData;
  birthday: string;
  email: string;
  facebook_uid: string;
  gender: number;
  id: number;
  is_first_time_login: number;
  jwt_token: string;
  name: string;
  phone: string;
  refresh_token: string;
  setting: SettingData;
  token_type: string;
  total_alo_point: number;
  username: string;
}

export interface AvatarData {
  avatar: string;
  avatar_three_image: ImageData;
  medium: string;
  original: string;
  thumb: string;
}

export interface ImageData {
  medium: string;
}

export interface SettingData {
  is_enable_gender: number;
  is_enable_birthday: number;
  is_enable_phone: number;
  is_enable_email: number;
  is_enable_address: number;
}


