import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading">Contact Us</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4590445890167!2d76.7986811755055!3d30.705492974597338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fece98c02452b%3A0xf3c99c507c9226eb!2sElante%20Mall%2C%20178-178A%2C%20Purv%20Marg%2C%20Industrial%20Area%20Phase%20I%2C%20Chandigarh%2C%20160002!5e0!3m2!1sen!2sin!4v1687719971218!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


    <div className="container">
      <div className="contact-form">
        <form action="" method="POST" className="contact-inputs">
          <input type="text" placeholder="username" name="username" required autoComplete="off"/>
          <input type="text" placeholder="Email" name="Email" required autoComplete="off"/>
          <textarea name="Message" id="" cols="30" rows="10" placeholder="Enter your message"></textarea>
          <input type="submit" value="send" />
        </form>
      </div>
    </div>
  </Wrapper>;
};

export default Contact;
