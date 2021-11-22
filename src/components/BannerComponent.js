import React from "react";

const BannerComponent = ({ banner, index }) => {
    return(
        <div>
                <img
                  src={banner.image}
                  alt={"banner " + (index + 1)}
                  className="Banner-image"
                />
                <div className="Banner-title">
                  {banner.title}
                </div>
                <div className="Banner-description">
                  {banner.description}
                </div>
              </div>
    );
}

export default BannerComponent;
