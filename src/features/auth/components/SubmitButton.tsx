interface SubmitButtonProps {
  isLogin: boolean;
  type: 'submit' | 'reset';
}

const SubmitButton = ({ isLogin, type }: SubmitButtonProps) => {
  return (
    <button
      type={type}
      className="w-full py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-xl transition transform hover:scale-105"
    >
      {isLogin ? 'Giriş Yap' : 'Hesap Oluştur'}
    </button>
  );
};

export default SubmitButton;
