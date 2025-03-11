import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import playStoreIcon from "../../assets/playstore.svg";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/prks61/FullStack-Video-Hosting-Backend-Development"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                {/* <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>{" "} */}
              </div>
            </header>
            <div className="body">
              <h3>A complete youtube like video hosting backend</h3>
              <p>
                A complete backend implementation for a YouTube-like video
                hosting platform. This project is designed with scalability and
                security in mind, offering essential features like user
                authentication, video management, comments, likes,
                subscriptions, and more. Built with Node.js, Express.js,
                MongoDB, and Mongoose, it follows industry best practices to
                ensure robustness and performance.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>javascript</li> <li>cloudinary</li> <li>NodeJs</li>{" "}
                <li>MongoDB</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                {/* <a
                  href="https://github.com/Ritik-in-Tech/targafy-backend"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
                <a
                  href="https://github.com/prks61/cloudinary-saas"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>{" "}
              </div>
            </header>
            <div className="body">
              <h3>SaaS-Based Video and Image Transformation Platform</h3>
              <p>
                I developed a cloud-powered SaaS application that allows users
                to upload, transform, and share videos and images with AI-driven
                enhancements. The platform utilizes AI to generate content-aware
                previews, enabling optimized video thumbnails and intelligent
                resizing for various social media formats. It also features
                efficient video compression to minimize quality loss while
                maintaining high visual fidelity. To ensure a seamless user
                experience, I integrated Clerk for secure authentication,
                allowing smooth login and registration workflows. Media uploads
                and transformations are managed through Cloudinary, leveraging
                AI-powered processing for enhanced image and video
                modifications. This project was built using Next.js, Clerk,
                Cloudinary, Zustand, and Node.js, combining modern web
                technologies to deliver a scalable and efficient solution.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>TypeScript,</li> <li>Next.js</li> <li>Clerk</li>
                <li>ReactJs</li> <li>MongoDB</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>



        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/prks61/Histopathologic-Cancer-Detection-using-VIT"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <img src={playStoreIcon} alt="Visit site" />
                </a>{" "}
              </div>
            </header>
            <div className="body">
              <h3>Histopathologic Cancer Detection</h3>
              <p>
                {" "}
                The histopathologic cancer detection dataset is a collection of
                pathology images used to detect metastatic cancer in
                histopathologic tissue. The dataset contains a total of 220,025
                RGB colour images of size 96x96 pixels. Each image has been
                labelled as either containing metastatic tissue or not, and the
                labels are binary (0 or 1). The dataset is split into two parts:
                the training and test sets. The training set contains 220,024
                images with their corresponding labels provided in a CSV file.
                The test set contains 57,458 unlabeled images, and the project
                aims to predict the labels of the test set with high accuracy.
                The dataset is intended to be used for developing machine
                learning models to automatically detect cancer in pathology
                images.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>ResNet</li> <li>python</li> <li>Inception</li>{" "}
                <li>pytorch</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>


      </div>
    </Container>
  );
}
