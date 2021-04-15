export interface AuthRequest {
  email: string;
  password: string;
  username?: string;
  passwordConfirm?: string;
}
