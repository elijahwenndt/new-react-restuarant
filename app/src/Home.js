//homepage that displays when state is set to home
export default function HomePage() {
  return (
    <div className="row justify-content-center">
      <div className="col-12 d-flex align-items-stretch my-2">
        <div className="card w-100 bg-light bg-opacity-75">
          <div className="card-body fst-italic">
            <h3 className="card-title text-center">
              Welcome to Faire Réagir La Nourriture
            </h3>
            <h5 className="card-text text-center">
              "The best food made with the best ingredients"
            </h5>
            <div className="card-text text-center align-items-center">
              Here at Faire Réagir La Nourriture, we have one mission. We want
              to bring you fresh farm to table food made with the best
              ingredients we can grow. Our food is all grown in our organic
              farms around on the outskirts of lexington. Every meal we offer
              combines these ingredients by a french trained chef into a cuisine
              that will delight the taste buds. We take our french inspiration
              and combine it with dishes around the world. These newly created
              french fusion classics will elevate your dining experience into
              something that you have never experienced before. Come visit us
              today at 348 E Main St, Lexington, KY 40507. à votre santé
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 d-flex align-items-stretch my-2">
        <div className="card w-100 bg-light bg-opacity-75">
          <div className="card-body fst-italic">
            <h3 className="card-title text-center my-2">
              Where we are located
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.2114130383106!2d-84.49472698420385!3d38.04215997971169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e844532c33%3A0xb6919957af36b713!2s348%20E%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1665691595006!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
