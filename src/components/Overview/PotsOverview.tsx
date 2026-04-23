import { Link } from 'react-router-dom';
import IconChevronRight from '../Icon/IconChevronRight';
import IconPot from '../../assets/images/icon-pot.svg';
import { mockPots } from '../../api/api';

export default function PotsOverview() {
  const totalSaved = mockPots.reduce((acc, p) => acc + p.total, 0);

  return (
    <section className="bg-white rounded-xl px-5 py-6 md:p-8 flex flex-col gap-5 ">
      <div className="flex justify-between items-center">
        <h2 className="font2 text-grey-900">Pots</h2>
        <Link
          to="/pots"
          className="cursor-pointer font4-regular text-grey-500 flex gap-3 items-center "
        >
          See Details
          <IconChevronRight className="w-3 h-3" />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div className="flex gap-4 items-center bg-beige-50 rounded-xl p-4 w-full md:w-80">
          <img src={IconPot} alt="Icon Pot" />
          <div className="flex flex-col gap-2.75">
            <span className="font4-regular text-grey-500">Total Saved</span>
            <span className="font1 text-grey-900">${totalSaved}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          {mockPots.slice(0, 4).map((p) => (
            <div key={p.id} className="flex gap-4 items-center">
              <div
                className="rounded-lg w-1 h-10.75"
                style={{ backgroundColor: p.theme }}
              ></div>
              <div className="flex flex-col gap-2">
                <span className="font5-regular text-grey-500">{p.name}</span>
                <span className="font4-bold text-grey-900">${p.total}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
