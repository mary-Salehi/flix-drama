import TabbedInterface from '../../ui/TabbedInterface'
import DescriptionTab from '../PostTabs/DescriptionTab';
import DownloadTab from '../PostTabs/DownloadTab';
import CastAndCrewTab from '../PostTabs/CastAndCrewTab';
import CommentsTab from '../PostTabs/CommentsTab';

const singlePostTabs = [
  {
    id: "description",
    name: "توضیحات",
    component: <DescriptionTab />,
  },
  {
    id: "download",
    name: "دانلود",
    component: <DownloadTab />,
  },
  {
    id: "cast",
    name: "عوامل",
    component: <CastAndCrewTab />,
  },
  {
    id: "comments",
    name: "نظرات",
    component: <CommentsTab />,
  },
];

function PostTabbedInterface() {
  return (
    <div>
      <TabbedInterface tabs={singlePostTabs}/>
    </div>
  )
}

export default PostTabbedInterface