import React from 'react';

const CustomSection = () => {
  return (
    <>
      <section className="relative bg-gray-100 py-20 px-10 h-[1000px]">
        {/* Overlapping Boxes Section */}
        <div style={{ display: 'flow', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
          <div className="relative h-[300px] w-full inset-x-[-40] inset-y-[100]">
            {/* Box 1 */}
            <div
              className="absolute top-0 left-10 w-[550px] h-[550px] shadow-lg"
              style={{
                zIndex: 11,
                border: "2px solid #91278F",
                background: '#fff',
                borderRadius: '550px'
              }}
            >
            </div>
            <div
              className="absolute top-12 left-[90] w-[450px] h-[450px] shadow-lg"
              style={{
                zIndex: 11,
                background: '#fff',
                border: "15px solid #272A5D",
                borderRadius: '450px'
              }}
            >
              <div style={{ display: 'flow', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{
                  alignSelf: 'stretch',
                  color: '#000',
                  textAlign: 'center',
                  fontFamily: 'Avenir LT Std',
                  fontSize: '64px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: '53px',
                  paddingTop: '111px'
                }}>
                  Vision
                </h1>
                <p
                  style={{
                    color: '#5A5A5A',
                    textAlign: 'center',
                    fontFamily: 'Work Sans',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '20px',
                    paddingLeft: '54px',
                    paddingRight: '55px',
                    paddingTop: '15px'
                  }}
                >To be leaders in originating intellectuals who are immensely competent to face the global challenges</p>
              </div>
            </div>

          </div>

          <div className="relative inset-x-[-155] inset-y-[-170]">
            {/* Box 2 */}
            <div
              className="absolute inset-x-[500] bg-[#fff] inset-y-[200] w-[430px] h-[430px] shadow-lg"
              style={{
                zIndex: 12,
                border: '2px solid #AB1E25',
                borderRadius: '438px'
              }}
            ></div>
            <div
              className="absolute inset-x-[535] bg-[#fff] inset-y-[245] w-[350px] h-[350px] shadow-lg"
              style={{
                zIndex: 12,
                border: '15px solid #AB1E25',
                borderRadius: '350px'
              }}
            >

              <div style={{ display: 'flow', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{
                  alignSelf: 'stretch',
                  color: '#000',
                  textAlign: 'center',
                  fontFamily: 'Avenir LT Std',
                  fontSize: '64px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: '53px',
                  paddingTop: '81px'
                }}>
                  Mission
                </h1>
                <p
                  style={{
                    color: '#5A5A5A',
                    textAlign: 'center',
                    fontFamily: 'Work Sans',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '20px',
                    paddingLeft: '40px',
                    paddingRight: '41px',
                    paddingTop: '15px'
                  }}
                >To produce scholars who can secure momentous employment at strategic level within the corporate world</p>
              </div>
            </div>
          </div>


          <div className="relative inset-x-[-165] inset-y-[-150]">

            {/* Box 3 */}
            <div
              className="absolute inset-x-[835] inset-y-[90] bg-green-500 w-[400px] h-[400px] shadow-lg"
              style={{
                zIndex: 12,
                border: '2px solid #272A5D',
                background: '#fff',
                borderRadius: '400px'
              }}
            ></div>

            <div
              className="absolute left-[866px] top-[125px] w-[330px] h-[330px] shadow-lg border-[10px] border-[#272A5D] bg-white rounded-full z-[2]"
            >
              <div style={{ display: 'flow', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{
                  alignSelf: 'stretch',
                  color: '#000',
                  textAlign: 'center',
                  fontFamily: 'Avenir LT Std',
                  fontSize: '64px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '53px',
                  paddingTop: '90px'
                }}>
                  Core
                  Values
                </h1>

              </div>
            </div>


            <div className="absolute left-[866px] top-[125px] w-[330px] h-[330px] rounded-full bg-white" style={{ zIndex: '12' }}>
              {/* Left Border */}
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full border-[10px] border-[#272A5D]"
                style={{
                  clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
                }}
              ></div>

              {/* Right Border */}
              <div
                className="absolute top-0 left-0 w-full h-full rounded-full border-[10px] border-white"
                style={{
                  clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
                }}
              ></div>
              <div style={{ display: 'flow', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{
                  alignSelf: 'stretch',
                  color: '#000',
                  textAlign: 'center',
                  fontFamily: 'Avenir LT Std',
                  fontSize: '64px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '53px',
                  paddingTop: '90px',
                  paddingLeft: '30px'
                }}>
                  Core
                  Values
                </h1>
              </div>
            </div>
          </div>


          {/* Box 4 */}
          <div className="relative inset-x-[-50] inset-y-[-240]">

            <div
              className="absolute inset-x-[824] inset-y-[80] w-[190px] h-[190px] shadow-lg"
              style={{
                zIndex: 12,
                border: '2px solid #AA318A',
                borderRadius: '190px'
              }}
            ></div>
            <div
              className="absolute inset-x-[835] inset-y-[90] w-[170px] h-[170px] shadow-lg"
              style={{
                zIndex: 13,
                background: '#AA318A',
                borderRadius: '170px'
              }}
            >
              <div style={{ display: 'flow', justifyContent: 'center', alignItems: 'center' }}>
                <h4 style={{
                  color: '#fff',
                  fontFamily: 'Avenir LT Std',
                  fontSize: '25px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: 'normal',
                  paddingLeft: '35px',
                  paddingTop: '50px'
                }}>Learning</h4>
              </div>
            </div>
          </div>

          {/* box 5 */}
          <div className="relative inset-x-[-110] inset-y-[-190]">

            <div
              className="absolute inset-x-[1024] inset-y-[90] bg-green-500 w-[170px] h-[170px] shadow-lg"
              style={{
                zIndex: 15,
                background: '#5DB7E0',
                borderRadius: '170px'
              }}
            >

              <div style={{ display: 'flow', justifyContent: 'center', alignItems: 'center', zIndex: '6' }}>
                <h4 style={{
                  color: '#fff',
                  fontFamily: 'Avenir LT Std',
                  fontSize: '25px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: 'normal',
                  paddingLeft: '20px',
                  paddingTop: '70px'
                }}>Community</h4>
              </div>
            </div>
            <div
              className="absolute inset-x-[1012] inset-y-[80] w-[190px] h-[190px] shadow-lg"
              style={{
                zIndex: 14,
                border: '2px solid #5DB7E0',
                borderRadius: '190px'
              }}
            >
            </div>

          </div>

          {/* box 6 */}
          <div className="relative inset-x-[-29] inset-y-[-280]">

            <div
              className="absolute inset-x-[1024] inset-y-[290] bg-green-500 w-[170px] h-[170px] shadow-lg"
              style={{
                zIndex: 17,
                background: '#D86027',
                borderRadius: '170px'
              }}
            >
              <div style={{ display: 'flow', justifyContent: 'center', alignItems: 'center', zIndex: '6' }}>
                <h4 style={{
                  color: '#fff',
                  fontFamily: 'Avenir LT Std',
                  fontSize: '25px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: 'normal',
                  paddingLeft: '40px',
                  paddingTop: '70px'
                }}>Integrity</h4>
              </div>
            </div>
            <div
              className="absolute inset-x-[1012] inset-y-[280] w-[190px] h-[190px] shadow-lg"
              style={{
                zIndex: 16,
                border: '2px solid #D86027',
                borderRadius: '190px'
              }}
            ></div>
          </div>

          {/* box 7 */}
          <div className="relative inset-x-[-20] inset-y-[-170]">

            <div
              className="absolute inset-x-[1024] inset-y-[290] bg-green-500 w-[170px] h-[170px] shadow-lg"
              style={{
                zIndex: 23,
                background: '#272A5D',
                borderRadius: '170px'
              }}
            >
              <div style={{ display: 'flow', justifyContent: 'center', alignItems: 'center', zIndex: '6' }}>
                <h4 style={{
                  color: '#fff',
                  fontFamily: 'Avenir LT Std',
                  fontSize: '25px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: 'normal',
                  paddingLeft: '5px',
                  paddingTop: '70px'
                }}>Accountability</h4>
              </div>
            </div>
            <div
              className="absolute inset-x-[1012] inset-y-[280] w-[190px] h-[190px] shadow-lg"
              style={{
                zIndex: 22,
                border: '2px solid #272A5D',
                borderRadius: '190px'
              }}
            ></div>
          </div>

          {/* box 8 */}
          <div className="relative inset-x-[-110] inset-y-[-70]">

            <div
              className="absolute inset-x-[1024] inset-y-[290] bg-green-500 w-[170px] h-[170px] shadow-lg"
              style={{
                zIndex: 21,
                background: '#818541',
                borderRadius: '170px'
              }}
            >
              <div style={{ display: 'flow', justifyContent: 'center', alignItems: 'center', zIndex: '6' }}>
                <h4 style={{
                  color: '#fff',
                  fontFamily: 'Avenir LT Std',
                  fontSize: '25px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: 'normal',
                  paddingLeft: '25px',
                  paddingTop: '70px'
                }}>Innovation</h4>
              </div>
            </div>
            <div
              className="absolute inset-x-[1012] inset-y-[280] w-[190px] h-[190px] shadow-lg"
              style={{
                zIndex: 20,
                border: '2px solid #818541',
                borderRadius: '190px'
              }}
            ></div>
          </div>


          {/* box 9 */}
          <div className="relative inset-x-[-240] inset-y-[-5]">

            <div
              className="absolute inset-x-[1024] inset-y-[290] bg-green-500 w-[170px] h-[170px] shadow-lg"
              style={{
                zIndex: 23,
                background: '#A02629',
                borderRadius: '170px'
              }}
            >
              <div style={{ display: 'flow', justifyContent: 'center', alignItems: 'center', zIndex: '6' }}>
                <h4 style={{
                  color: '#fff',
                  fontFamily: 'Avenir LT Std',
                  fontSize: '25px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: 'normal',
                  paddingLeft: '45px',
                  paddingTop: '70px'
                }}>Respect</h4>
              </div>
            </div>
            <div
              className="absolute inset-x-[1012] inset-y-[280] w-[190px] h-[190px] shadow-lg"
              style={{
                zIndex: 22,
                border: '2px solid #A02629',
                borderRadius: '190px'
              }}
            ></div>
          </div>
        </div>

        {/* 1st dashed line */}
        <div className="relative inset-x-[940] inset-y-[-150]"
          style={{ zIndex: '50' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="300" height="50" viewBox="0 0 300 50" fill="none">
            <line
              x1="10"
              y1="25"
              x2="990"
              y2="25"
              stroke="#9F3181"
              stroke-width="2"
              stroke-dasharray="10 10"
            />
          </svg>
        </div>

        {/* 2nd dashed line */}
        <div className="relative inset-x-[1080] inset-y-[-105]"
          style={{ zIndex: '50' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="300" height="50" viewBox="0 0 300 50" fill="none">
            <line
              x1="10"
              y1="25"
              x2="990"
              y2="25"
              stroke="#5DB7E0"
              stroke-width="2"
              stroke-dasharray="10 10"
            />
          </svg>
        </div>

        {/* 3rd dashed line */}
        <div className="relative inset-x-[1160] inset-y-[-50]"
          style={{ zIndex: '50' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="300" height="50" viewBox="0 0 300 50" fill="none">
            <line
              x1="10"
              y1="25"
              x2="990"
              y2="25"
              stroke="#D86027"
              stroke-width="2"
              stroke-dasharray="10 10"
            />
          </svg>
        </div>

        {/* 4th dashed line */}
        <div className="relative inset-x-[1170] inset-y-[5]"
          style={{ zIndex: '50' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="300" height="50" viewBox="0 0 300 50" fill="none">
            <line
              x1="10"
              y1="25"
              x2="990"
              y2="25"
              stroke="#272A5D"
              stroke-width="2"
              stroke-dasharray="10 10"
            />
          </svg>
        </div>

        {/* 5th dashed line */}
        <div className="relative inset-x-[1080] inset-y-[80]"
          style={{ zIndex: '50' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="300" height="50" viewBox="0 0 300 50" fill="none">
            <line
              x1="10"
              y1="25"
              x2="990"
              y2="25"
              stroke="#818541"
              stroke-width="2"
              stroke-dasharray="10 10"
            />
          </svg>
        </div>

        {/* 6th dashed line */}
        <div className="relative inset-x-[935] inset-y-[135]"
          style={{ zIndex: '50' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="300" height="50" viewBox="0 0 300 50" fill="none">
            <line
              x1="10"
              y1="25"
              x2="990"
              y2="25"
              stroke="#A81E25"
              stroke-width="2"
              stroke-dasharray="10 10"
            />
          </svg>
        </div>

        {/* 01 Text box */}
        <div className="relative inset-x-[1243] inset-y-[72]"
          style={{ zIndex: '50' }}
        >
          <div style={{
            display: 'flex',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            alignSelf: 'stretch',
            background: '#A02629',
            borderRadius: '10px',
            width: '600px'
          }}>
            <p style={{
              color: '#fff',
              textAlign: 'justify',
              fontFamily: 'Work Sans',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '25px'
            }}>
              Promoting a school community that appreciates the value of students, families, colleagues, and cultures.
            </p>
          </div>
        </div>

        {/* 02 Text box */}
        <div className="relative inset-x-[1243] inset-y-[-130]"
          style={{ zIndex: '50' }}
        >
          <div style={{
            display: 'flex',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            alignSelf: 'stretch',
            background: '#818541',
            borderRadius: '10px',
            width: '600px'
          }}>
            <p style={{
              color: '#fff',
              textAlign: 'justify',
              fontFamily: 'Work Sans',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '25px'
            }}>
              We challenging ourselves to create unique ideas and innovative solutions to meet the challenge of providing an inclusive and equitable education for all, we confront the global learning crisis by growing more leaders worldwide who will take the initiative to accelerate change.
            </p>
          </div>
        </div>

        {/* 03 Text box */}
        <div className="relative inset-x-[1243] inset-y-[-357]"
          style={{ zIndex: '50' }}
        >
          <div style={{
            display: 'flex',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            alignSelf: 'stretch',
            background: '#272A5D',
            borderRadius: '10px',
            width: '600px'
          }}>
            <p style={{
              color: '#fff',
              textAlign: 'justify',
              fontFamily: 'Work Sans',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '25px'
            }}>
              All of us contribute to the success of our students and our college. We act with responsibility when we do our job well and help others do the same. We act professionally and respectfully. We are accountable for what we say and do.
            </p>
          </div>
        </div>

        {/* 04 Text box */}
        <div className="relative inset-x-[1243] inset-y-[-558]"
          style={{ zIndex: '50' }}
        >
          <div style={{
            display: 'flex',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            alignSelf: 'stretch',
            background: '#D86027',
            borderRadius: '10px',
            width: '600px'
          }}>
            <p style={{
              color: '#fff',
              textAlign: 'justify',
              fontFamily: 'Work Sans',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '25px'
            }}>
              Trust and honesty are the cornerstones of our college. We keep our commitments, act consistently and fairly, and do what we say we will. Our students and constituents know what to expect when they deal with us. We are ethical and forthright.
            </p>
          </div>
        </div>

        {/* 05 Text box */}
        <div className="relative inset-x-[1243] inset-y-[-759]"
          style={{ zIndex: '50' }}
        >
          <div style={{
            display: 'flex',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            alignSelf: 'stretch',
            background: '#5DB7E0',
            borderRadius: '10px',
            width: '600px'
          }}>
            <p style={{
              color: '#fff',
              textAlign: 'justify',
              fontFamily: 'Work Sans',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '25px'
            }}>
              Creating and maintaining meaningful relationships among students, families, teachers, staff, and community partners to change the world for the better by building and supporting a sense of community.
            </p>
          </div>
        </div>

        {/* 06 Text box */}
        <div className="relative inset-x-[1243] inset-y-[-935]"
          style={{ zIndex: '50' }}
        >
          <div style={{
            display: 'flex',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            alignSelf: 'stretch',
            background: '#9F3181',
            borderRadius: '10px',
            width: '600px'
          }}>
            <p style={{
              color: '#fff',
              textAlign: 'justify',
              fontFamily: 'Work Sans',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '25px'
            }}>
              Supporting a learning environment that continuously motivates all individuals to change the world by increasing knowledge and skills.
            </p>
          </div>
        </div>

        {/* Left Side Backround Circls */}
        {/* 1st bg line */}
        <div className="absolute inset-x-[-560] inset-y-[190]"
        >
          <div
            className="absolute inset-x-[824] inset-y-[80] w-[190px] h-[190px]"
            style={{
              zIndex: 1,
              width: '710px',
              height: '710px',
              flexShrink: '0',
              borderRadius: '710px',
              border: '3px solid rgba(168, 38, 41, 0.15)'
            }}
          ></div>
        </div>

        {/* 2nd bg line */}
        <div className="absolute inset-x-[-560] inset-y-[200]"
        >
          <div
            className="absolute inset-x-[785] inset-y-[30] w-[190px] h-[190px]"
            style={{
              zIndex: 2,
              width: '795px',
              height: '795px',
              flexShrink: '0',
              borderRadius: '795px',
              border: '3px solid rgba(168, 38, 41, 0.15)'
            }}
          ></div>
        </div>
        {/* 3rd bg line */}
        <div className="absolute inset-x-[-560] inset-y-[200]"
        >
          <div
            className="absolute inset-x-[750] inset-y-[-20] w-[190px] h-[190px]"
            style={{
              zIndex: 2,
              width: '880px',
              height: '880px',
              flexShrink: '0',
              borderRadius: '880px',
              border: '3px solid #A0262926'
            }}
          ></div>
        </div>

        {/* 4th bg line */}
        <div className="absolute inset-x-[-560] inset-y-[200]"
        >
          <div
            className="absolute inset-x-[710] inset-y-[-70] w-[190px] h-[190px]"
            style={{
              zIndex: 2,
              width: '965px',
              height: '965px',
              flexShrink: '0',
              borderRadius: '965px',
              border: '3px solid #A0262926'
            }}
          ></div>
        </div>

        {/* 5th bg line */}
        <div className="absolute inset-x-[-560] inset-y-[200]"
        >
          <div
            className="absolute inset-x-[670] inset-y-[-115] w-[190px] h-[190px]"
            style={{
              zIndex: 2,
              width: '1050px',
              height: '1050px',
              flexShrink: '0',
              borderRadius: '1050px',
              border: '3px solid #A0262926'
            }}
          ></div>
        </div>


        {/* Right Side BG line */}

        {/* 1st bg line */}
        <div className="absolute inset-x-[140] inset-y-[115]"
        >
          <div
            className="absolute inset-x-[670] inset-y-[-115] w-[190px] h-[190px]"
            style={{
              zIndex: 6,
              width: '1050px',
              height: '1050px',
              flexShrink: '0',
              borderRadius: '1050px',
              border: '10px solid #FFFFFF99'
            }}
          ></div>
        </div>

        {/* 2nd bg line */}
        <div className="absolute inset-x-[180] inset-y-[165]"
        >
          <div
            className="absolute inset-x-[670] inset-y-[-115] w-[190px] h-[190px]"
            style={{
              zIndex: 6,
              width: '965px',
              height: '965px',
              flexShrink: '0',
              borderRadius: '965px',
              border: '10px solid #FFFFFF99'
            }}
          ></div>
        </div>

        {/* 3rd bg line */}
        <div className="absolute inset-x-[225] inset-y-[210]"
        >
          <div
            className="absolute inset-x-[670] inset-y-[-115] w-[190px] h-[190px]"
            style={{
              zIndex: 6,
              width: '880px',
              height: '880px',
              flexShrink: '0',
              borderRadius: '880px',
              border: '10px solid #FFFFFF99'
            }}
          ></div>
        </div>

        {/* 4th bg line */}
        <div className="absolute inset-x-[268] inset-y-[255]"
        >
          <div
            className="absolute inset-x-[670] inset-y-[-115] w-[190px] h-[190px]"
            style={{
              zIndex: 6,
              width: '795px',
              height: '795px',
              flexShrink: '0',
              borderRadius: '795px',
              border: '10px solid #FFFFFF99'
            }}
          ></div>
        </div>

        {/* 5th bg line */}
        <div className="absolute inset-x-[308] inset-y-[300]"
        >
          <div
            className="absolute inset-x-[670] inset-y-[-115] w-[190px] h-[190px]"
            style={{
              zIndex: 6,
              width: '710px',
              height: '710px',
              flexShrink: '0',
              borderRadius: '710px',
              border: '10px solid #FFFFFF99'
            }}
          ></div>
        </div>
      </section>

      <section>
        <h1>Hello world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nihil. Commodi quae, sequi id quam aliquam expedita fuga ea adipisci rem fugit veritatis eos nemo vitae recusandae, ratione aliquid minus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus consequuntur recusandae libero sed, nostrum magnam asperiores molestias velit voluptate voluptates vero, repudiandae similique doloremque suscipit veniam, inventore quos sunt earum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit laborum voluptas animi odit dignissimos fuga, eligendi qui aliquam vero quidem aperiam ipsam magnam numquam, quae inventore voluptatum repudiandae unde dolores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ducimus fugiat provident itaque et fugit nisi distinctio nostrum accusamus doloremque. Accusantium quasi nobis, iure cumque voluptates odit explicabo fugiat rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quod praesentium, eum, enim necessitatibus mollitia aut perferendis quis harum ex nisi! Incidunt cupiditate placeat veniam, suscipit dolores ut ipsum modi?</p>
      </section>

    </>
  );
};

export default CustomSection;
