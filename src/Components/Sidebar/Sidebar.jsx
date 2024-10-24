import PropTypes from 'prop-types';
const Sidebar = ({ cards, handlePreparingBtn, preparing, CalculateTimeAndCalo, totalTime, totalCalories}) => {
    return (
        <div className="md:w-1/3 border-2 rounded-xl text-gray-600 p-1">
            {/* Want to cook table */}
            <h1 className="text-3xl font-bold text-center py-4">Want to Cook: {cards.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cards.map((info, idx) => (
                                <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{info.recipe_name}</td>
                                    <td>{info.preparing_time}</td>
                                    <td>{info.calories}</td>
                                    <td>
                                        <button 
                                        onClick={() => {
                                            handlePreparingBtn(info.recipe_id) 
                                            CalculateTimeAndCalo(info.preparing_time, info.calories)}} 
                                            className="btn btn-sm btn-success text-white px-2 rounded-3xl">Preparing</button>
                                    </td>
                                </tr>))
                        }
                    </tbody>
                </table>
            </div>
            {/* Current Cook */}
            <h1 className="text-3xl font-bold text-center py-4 mt-10">Currently cooking: {preparing.length}</h1>
            <div className="overflow-x-auto pb-4">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            preparing.map((info, idx) => (
                                <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{info.recipe_name}</td>
                                    <td>{info.preparing_time}</td>
                                    <td>{info.calories}</td>
                                </tr>))
                        }
                        <tr className='border-none'>
                            <th></th>
                            <td></td>
                            <td>Total Time = {totalTime}</td>
                            <td>Total Calo = {totalCalories}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    cards: PropTypes.array.isRequired,
    handlePreparingBtn: PropTypes.func.isRequired,
    preparing: PropTypes.array.isRequired,
    CalculateTimeAndCalo: PropTypes.func.isRequired,
    totalTime: PropTypes.number.isRequired,
    totalCalories: PropTypes.number.isRequired

}
export default Sidebar;