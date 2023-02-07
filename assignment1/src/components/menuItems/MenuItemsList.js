import Table from 'react-bootstrap/Table';
import MenuItemsMockList from './MenuItemsMockList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import "./styles.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const MenuItemsList = () => {
  const menuItemList = MenuItemsMockList;
  const navigate = useNavigate();

  const showAddMenuPage = () => {
    navigate("/menu/add");
  }
  return (
    <div className='m-3'>
      <h4>Menu Items</h4>
      <div className='bg-light header'>
        <input placeholder="Search..." className='searchBar'/>
        <Button variant="primary" className='addItem' onClick={showAddMenuPage}>Add Menu Item</Button>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Main Ingredients</th>
            <th>Cuisine</th>
            <th>Spicy Level (1-3)</th>
            <th>Price</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
        {menuItemList.map((item,index) => {
          return(
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.ingredients}</td>
              <td>{item.cuisine}</td>
              <td>{item.spicyLevel}</td>
              <td>{item.price}</td>
              <td><FontAwesomeIcon icon={faEdit} /></td>
              <td><FontAwesomeIcon icon={faTrash} /></td>
            </tr>
          )
        })}
        </tbody>
      </Table>
    </div>
  
  );
}

export default MenuItemsList;