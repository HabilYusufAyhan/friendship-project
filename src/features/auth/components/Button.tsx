interface ButtonProps {
  isLogin: boolean;
  type: 'submit' | 'reset' | 'button';
}

const Button = ({ isLogin, type }: ButtonProps) => {
  return (
    <button
      type={type}
      className="cursor-pointer w-full py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-xl transition transform hover:scale-105"
    >
      {isLogin ? 'Giriş Yap' : 'Hesap Oluştur'}
    </button>
  );
};

export default Button;
