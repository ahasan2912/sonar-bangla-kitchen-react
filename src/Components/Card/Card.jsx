import PropTypes from 'prop-types';
const Card = ({ card, handleCookButton }) => {
    const {recipe_name, recipe_image, short_description, calories, ingredients, preparing_time } = card;
    return (
        <div className="border-2 rounded-xl p-4">
            <img className="w-full h-60 rounded-lg object-fill" src={recipe_image} alt="" />
            <h2 className="text-xl font-bold mt-8">{recipe_name}</h2>
            <p>{short_description}</p>
            <div className='border-b-2 py-2'></div>
            <h3 className='text-lg font-semibold text-gray-600 mt-3'>Ingredients: {ingredients.length}</h3>
            <ul className='ml-7'>
                {
                    ingredients.map((item, idx) => <li key={idx} className='list-disc'>{item}</li>)
                }
            </ul>
            <div className='border-b-2 py-2'></div>
            <div className='flex items-center gap-16 mt-4'>
                <div className='flex items-center gap-2'>
                    <i className="fa-regular fa-clock text-xl"></i>
                    <p>{preparing_time} minute</p>
                </div>
                <div className='flex items-center gap-2'>
                    <i className="fa-solid fa-fire-flame-curved text-xl"></i>
                    <p>{calories}</p>
                </div>
            </div>
            <div>
                <button onClick={()=>handleCookButton(card)} className='btn bg-green-400 rounded-full px-8 text-lg text-gray-800 mt-6 font-medium'>Want to Cook</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleCookButton: PropTypes.func.isRequired
}
export default Card;