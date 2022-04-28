import React from 'react'
import { SortableElement, } from 'react-sortable-hoc';
import { FaPen, FaTrash, FaAlignJustify } from 'react-icons/fa'
const SortableItem = SortableElement(({ value }) => (
  <tr>
    <td><FaAlignJustify className='move' /></td>
    <td className="td-id">{value.id}</td>
    <td className="td-worker-name">{value.workerName}</td>
    <td>{value.extraHours}</td>
    <td>{value.manualHours}</td>
    <td>{value.hours}</td>
    <td>{value.totalHours}</td>
    <td className='smallCol'>
      <FaPen className='action pen' />
    </td>
    <td className='smallCol'>
      <FaTrash className='action trash' />
    </td>
  </tr>
));

export default SortableItem

