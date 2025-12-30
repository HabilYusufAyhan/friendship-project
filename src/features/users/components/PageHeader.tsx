// components/layout/PageHeader.tsx
interface Props {
  total: number;
}

export const PageHeader = ({ total }: Props) => (
  <div className="mb-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-2">Yeni İnsanlarla Tanış</h2>
    <p className="text-gray-600">İlgi alanlarına uygun {total} kişi bulundu</p>
  </div>
);
