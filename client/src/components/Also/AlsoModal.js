import { useState, useEffect } from 'react'
import useAlsoApi from '../../api/also.api'
import styles from './AlsoModal.module.css'

function Modal ({productId}) {
    const Also = useAlsoApi()

    const [isModalOpen, setModalOpen] = useState(false)
    const [relatedItems, setRelatedItems] = useState([])
    const [selectedItems, setSelectedItems] = useState(new Set())
  
    // Open modal and fetch related products
    const openModal = () => {
        setModalOpen(true)
    }
  
    // Close modal
    const closeModal = () => {
        setModalOpen(false)
        setRelatedItems([])
    }
  
    // Fetch related items when modal opens
    useEffect(() => {
        if (isModalOpen) {
        // fetch logic (API call)
            const fetchRelated = async () => {
                const count = 6
                const data = await Also.get(count)
                setRelatedItems(data)
            }
            fetchRelated()
        }
    }, [isModalOpen, productId])
  
    // Handle checkbox change
    const toggleItem = (itemId) => {
        setSelectedItems((prev) => {
            const copy = new Set(prev)
            copy.has(itemId) ? copy.delete(itemId) : copy.add(itemId)
            return copy
        })
    }
  
    // Save active selections
    const saveSelection = async (id=null) => {
        const also = await Also.set(id, productId)
        if(!also) {return}
        closeModal()
    }
  
    return (
        <div>
            <button onClick={openModal}>Замінити</button>
  
            {isModalOpen && (
                <div className={styles.overlay}>
                    <div className={styles.modal}>
                        <h2>Виберіть продукти для відображення</h2>
                        <ul>
                            {relatedItems.map((item) => (
                                <li key={item.id}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={selectedItems.has(item.id)}
                                            onChange={() => toggleItem(item.id)}
                                        />
                                        {item.name}
                                    </label>
                                </li>
                            ))}
                        </ul>
                        <button onClick={saveSelection}>Зберегти</button>
                        <button onClick={closeModal} style={{ marginLeft: '10px' }}>Відмінити</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal