import React, { useEffect } from "react";
import land1 from "../../../Assets/Images/land1.jpg";
import land2 from "../../../Assets/Images/land2.jpg";
import land3 from "../../../Assets/Images/land3.jpg";
import land4 from "../../../Assets/Images/land4.jpg";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    class VerticalMouseDrivenCarousel {
      constructor(options = {}) {
        const _defaults = {
          carousel: ".js-carousel",
          bgImg: ".js-carousel-bg-img",
          list: ".js-carousel-list",
          listItem: ".js-carousel-list-item",
        };

        this.posY = 0;

        this.defaults = Object.assign({}, _defaults, options);

        this.initCursor();
        this.init();
        this.bgImgController();
      }

      //region getters
      getBgImgs() {
        return document.querySelectorAll(this.defaults.bgImg);
      }

      getListItems() {
        return document.querySelectorAll(this.defaults.listItem);
      }

      getList() {
        return document.querySelector(this.defaults.list);
      }

      getCarousel() {
        return document.querySelector(this.defaults.carousel);
      }

      init() {
        window.TweenMax.set(this.getBgImgs(), {
          autoAlpha: 0,
          scale: 1.05,
        });

        window.TweenMax.set(this.getBgImgs()[0], {
          autoAlpha: 1,
          scale: 1,
        });

        this.listItems = this.getListItems().length - 1;

        this.listOpacityController(0);
      }

      initCursor() {
        const listHeight = this.getList().clientHeight;
        const carouselHeight = this.getCarousel().clientHeight;

        this.getCarousel().addEventListener(
          "mousemove",
          (event) => {
            this.posY = event.pageY - this.getCarousel().offsetTop;
            let offset = (-this.posY / carouselHeight) * listHeight;

            window.TweenMax.to(this.getList(), 0.3, {
              y: offset,
              ease: window.Power4.easeOut,
            });
          },
          false
        );
      }

      bgImgController() {
        for (const link of this.getListItems()) {
          link.addEventListener("mouseenter", (ev) => {
            let currentId = ev.currentTarget.dataset.itemId;

            this.listOpacityController(currentId);

            window.TweenMax.to(ev.currentTarget, 0.3, {
              autoAlpha: 1,
            });

            window.TweenMax.to(".is-visible", 0.2, {
              autoAlpha: 0,
              scale: 1.05,
            });

            if (!this.getBgImgs()[currentId].classList.contains("is-visible")) {
              this.getBgImgs()[currentId].classList.add("is-visible");
            }

            window.TweenMax.to(this.getBgImgs()[currentId], 0.6, {
              autoAlpha: 1,
              scale: 1,
            });
          });
        }
      }

      listOpacityController(id) {
        id = parseInt(id);
        let aboveCurrent = this.listItems - id;
        let belowCurrent = parseInt(id);

        if (aboveCurrent > 0) {
          for (let i = 1; i <= aboveCurrent; i++) {
            let opacity = 0.5 / i;
            let offset = 5 * i;
            window.TweenMax.to(this.getListItems()[id + i], 0.5, {
              autoAlpha: opacity,
              x: offset,
              ease: window.Power3.easeOut,
            });
          }
        }

        if (belowCurrent > 0) {
          for (let i = 0; i <= belowCurrent; i++) {
            let opacity = 0.5 / i;
            let offset = 5 * i;
            window.TweenMax.to(this.getListItems()[id - i], 0.5, {
              autoAlpha: opacity,
              x: offset,
              ease: window.Power3.easeOut,
            });
          }
        }
      }
    }

    new VerticalMouseDrivenCarousel();
  }, []);

  return (
    <div className="hero">
      <div className="container">
        <header className="c-header c-header--archive c-header--project-list">
          <div className="c-mouse-vertical-carousel js-carousel u-media-wrapper u-media-wrapper--16-9">
            <ul className="c-mouse-vertical-carousel__list js-carousel-list">
              <li
                className="c-mouse-vertical-carousel__list-item js-carousel-list-item"
                data-item-id="0"
              >
                  <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                    <span>01</span> Nevada
                  </p>

                  <p className="c-mouse-vertical-carousel__title u-a5">
                    Carson City
                  </p>
              </li>

              <li
                className="c-mouse-vertical-carousel__list-item js-carousel-list-item"
                data-item-id="1"
              >
                  <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                    <span>02</span> New Hampshire
                  </p>

                  <p className="c-mouse-vertical-carousel__title u-a5">
                    Concord
                  </p>
              </li>

              <li
                className="c-mouse-vertical-carousel__list-item js-carousel-list-item"
                data-item-id="2"
              >
                  <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                    <span>03</span> New York
                  </p>

                  <p className="c-mouse-vertical-carousel__title u-a5">
                    Albany
                  </p>
              </li>

              <li
                className="c-mouse-vertical-carousel__list-item js-carousel-list-item"
                data-item-id="3"
              >
                  <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                    <span>04</span> Oklahoma
                  </p>

                  <p className="c-mouse-vertical-carousel__title u-a5">
                    Oklahoma City
                  </p>
              </li>


            </ul>

            <i
              className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img"
              style={{backgroundImage: `url(${land1})`}}
            ></i>
            <i
              className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img"
              style={{backgroundImage: `url(${land2})`}}
            ></i>
            <i
              className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img"
              style={{backgroundImage: `url(${land3})`}}
            ></i>
            <i
              className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img"
              style={{backgroundImage: `url(${land4})`}}
            ></i>

            <i className="c-gradient-overlay"></i>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Hero;
