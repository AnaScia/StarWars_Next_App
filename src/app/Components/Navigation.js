import Link from 'next/link';

const links = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Films',
    route: '/films',
  },
  {
    label: 'Characters',
    route: '/characters',
  },
];
export default function Navigation() {
  return (
    <header className="border border-black rounded p-1">
      <nav>
        <ul className="flex list-none gap-6">
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link
                href={route}
                className="bg-black hover:bg-white text-sky-400"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
