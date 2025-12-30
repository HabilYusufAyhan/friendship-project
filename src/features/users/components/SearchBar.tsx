// components/layout/SearchBar.tsx
import { Search } from 'lucide-react';

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export const SearchBar = ({ value, onChange }: Props) => (
  <div className="mb-6">
    <div className="relative max-w-md">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="İsim olarak ara"
        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition"
      />
    </div>
  </div>
);
