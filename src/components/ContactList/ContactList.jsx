// import css from "./ContactList.module.css";
// import Contact from "../Contact/Contact";

// export default function ContactList({ contacts, onDelete }) {
//   return (
//     <ul className={css.contact_list}>
//       {contacts.map((contact) => {
//         return (
//           <li key={contact.id}>
//             <Contact
//               name={contact.name}
//               number={contact.number}
//               id={contact.id}
//               onDelete={onDelete}
//             />
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { getContacts, getFilters } from "../../redux/selectors";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const searchContact = useSelector(getFilters);

  const contactToRender = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchContact.name.toLowerCase())
  );

  return (
    <ul className={css.contact_list}>
      {contactToRender.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
}
