import PropTypes from 'prop-types';
import SidebarInfo from '../SidebarInfo/SidebarInfo';
const Sidebar = ({cards}) => {
    return (
        <div className="md:w-1/3 border-2 rounded-xl text-gray-600 p-1">
            <h1 className="text-3xl font-bold text-center py-4">Want to Cook: {cards.length}</h1>
            <hr />
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='text-base'>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </div>
            {
                cards.map((info, idx) => <SidebarInfo key={idx} info={info} idx={idx + 1}></SidebarInfo>)
            }
        </div>
    );
};

Sidebar.propTypes = {
    cards: PropTypes.array.isRequired
}
export default Sidebar;