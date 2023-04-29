import { useAllExhibitions } from '../api/exhitbition';

const ExhibitionList = () => {
  const { data: exhibitions } = useAllExhibitions();

  return <div>{JSON.stringify(exhibitions)}</div>;
};

export default ExhibitionList;
