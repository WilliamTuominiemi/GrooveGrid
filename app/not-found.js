export default function notFound() {
  return (
    <div className=" flex flex-col justify-center items-center px-6 py-4">
      <h1 className="text-5xl font-bold text-center text-MidnightPowderBlue">404</h1>
      <p className="text-xl text-gray-800 mt-4">We can't seem to find the page you're looking for.</p>
      <a
        href="/"
        className="inline-flex items-center px-4 py-2 mt-8 font-bold text-white bg-MidnightPowderBlue rounded hover:bg-NavyPaleAqua focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dustyTurquoise"
      >
        Go Back Home
      </a>
    </div>
  );
}
