import PropTypes from 'prop-types';
const SidebarInfo = ({ info, idx }) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        <tr className='hover'>
                            <th>{idx}</th>
                            <td>{info.recipe_name}</td>
                            <td>{info.preparing_time}</td>
                            <td>{info.calories}</td>
                            <td>
                            <button className="btn btn-sm btn-success text-white px-2 rounded-3xl">Preparing</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
SidebarInfo.propTypes = {
    info: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired
}
export default SidebarInfo;
