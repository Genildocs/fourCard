import { useMediaQuery } from 'react-responsive';
import Supervisor from '../assets/images/icon-supervisor.svg';
import Home from '../assets/images/icon-team-builder.svg';
import Calculator from '../assets/images/icon-calculator.svg';
import Karma from '../assets/images/icon-karma.svg';

export default function Cards() {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const cardStyles = {
    boxShadow: '0px 15px 30px -11px rgba(131, 166, 210, 0.50)',
  };

  const cardData = [
    {
      title: 'Supervisor',
      description: 'Monitors activity to identify project roadblocks',
      image: Supervisor,
      color: '#44D3D2',
      gridRow: '2/4',
      alignSelf: 'center',
    },
    {
      title: 'Team Builder',
      description:
        'Scans our talent network to create the optimal team for your project',
      image: Home,
      color: '#EA5454',
    },
    {
      title: 'Karma',
      description: "Tracks and analyzes your project's karma score",
      image: Karma,
      color: '#549EF2',
      gridColumn: 3,
      gridRow: '2/ 4',
      alignSelf: 'center',
    },
    {
      title: 'Calculator',
      description: 'Performs complex calculations quickly and accurately',
      image: Calculator,
      color: '#FCAE4A',
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:justify-center gap-8 p-8 lg:px-[10rem] lg:py-[5rem]">
      <div className=" mt-20 lg:col-span-full">
        <p className="text-center font-extralight text-2xl lg:text-4xl leading-5 ">
          Reliable, efficient delivery
        </p>
        <h1 className="text-2xl lg:text-4xl mb-2  font-semibold text-center  text-neutral-very-dark-blue">
          Powered by Technology
        </h1>
        <p className="text-center text-xs lg:text-base leading-5 opacity-50 mb-8 ">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      {cardData.map((card, index) => (
        <div
          key={index}
          className={
            'p-7 rounded-lg grid grid-cols-2 ' +
            (index === 3 ? 'lg:col-start-2 self-center' : '')
          }
          style={{
            ...cardStyles,
            borderTop: `4px solid ${card.color}`,
            gridColumn: isLargeScreen && card.gridColumn,
            gridRow: isLargeScreen && card.gridRow,
            alignSelf: card.alignSelf,
          }}
        >
          <h2 className="font-semibold text-xl text-neutral-very-dark-blue col-span-3">
            {card.title}
          </h2>
          <p className="text-xs col-span-3 leading-5 opacity-50 mb-8">
            {card.description}
          </p>
          <div className="col-start-2 justify-self-end">
            <img src={card.image} alt={card.title} />
          </div>
        </div>
      ))}
    </div>
  );
}
