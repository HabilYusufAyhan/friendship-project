import { z } from 'zod';

export const createAuthSchema = () => {
  return z
    .object({
      name: z
        .string()
        .min(2, 'Adınız en az 2 karakter olmalıdır.')
        .max(50, 'Adınız en fazla 50 karakter olmalıdır.')
        .regex(/^[a-zA-ZığüşöçİĞÜŞÖÇ\s]+$/, 'Adınız sadece harflerden oluşabilir.'),
      email: z.string().email('Geçerli bir e-posta adresi giriniz.'),
      password: z
        .string()
        .min(6, 'Şifreniz en az 6 karakter olmalıdır.')
        .max(20, 'Şifreniz en fazla 20 karakter olmalıdır.')
        .regex(/[A-Z]/, 'Şifrenizde en az bir büyük harf bulunmalıdır.')
        .regex(/[a-z]/, 'Şifrenizde en az bir küçük harf bulunmalıdır.')
        .regex(/[0-9]/, 'Şifrenizde en az bir rakam bulunmalıdır.')
        .regex(/[\W_]/, 'Şifrenizde en az bir özel karakter bulunmalıdır.'),
      confirmPassword: z.string()
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Şifreler eşleşmeli',
      path: ['confirmPassword']
    });
};
