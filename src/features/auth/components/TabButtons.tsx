const TabButtons = ({
  isLogin,
  setIsLogin
}: {
  isLogin: boolean;
  setIsLogin: (val: boolean) => void;
}) => {
  return (
    <div className="flex gap-4 mb-8">
      <button
        type="button"
        onClick={() => setIsLogin(true)}
        className={`cursor-pointer flex-1 py-3 rounded-xl font-semibold transition ${
          isLogin
            ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Giriş Yap
      </button>
      <button
        type="button"
        onClick={() => setIsLogin(false)}
        className={`cursor-pointer flex-1 py-3 rounded-xl font-semibold transition ${
          !isLogin
            ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Kayıt Ol
      </button>
    </div>
  );
};

export default TabButtons;
