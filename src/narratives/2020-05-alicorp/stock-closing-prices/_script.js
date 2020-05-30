import { initFrame } from "@newswire/frames";

const data = [
  {
    date: "1/2/18",
    closing: 3.1175,
  },
  {
    date: "1/3/18",
    closing: 3.103,
  },
  {
    date: "1/4/18",
    closing: 3.1465,
  },
  {
    date: "1/5/18",
    closing: 3.2335,
  },
  {
    date: "1/8/18",
    closing: 3.248,
  },
  {
    date: "1/9/18",
    closing: 3.2625,
  },
  {
    date: "1/10/18",
    closing: 3.248,
  },
  {
    date: "1/11/18",
    closing: 3.2335,
  },
  {
    date: "1/12/18",
    closing: 3.277,
  },
  {
    date: "1/16/18",
    closing: 3.4075,
  },
  {
    date: "1/17/18",
    closing: 3.3669,
  },
  {
    date: "1/18/18",
    closing: 3.3669,
  },
  {
    date: "1/19/18",
    closing: 3.306,
  },
  {
    date: "1/22/18",
    closing: 3.3205,
  },
  {
    date: "1/23/18",
    closing: 3.3292,
  },
  {
    date: "1/24/18",
    closing: 3.3669,
  },
  {
    date: "1/25/18",
    closing: 3.3669,
  },
  {
    date: "1/26/18",
    closing: 3.3756,
  },
  {
    date: "1/29/18",
    closing: 3.3698,
  },
  {
    date: "1/30/18",
    closing: 3.335,
  },
  {
    date: "1/31/18",
    closing: 3.2364,
  },
  {
    date: "2/1/18",
    closing: 3.2654,
  },
  {
    date: "2/2/18",
    closing: 3.248,
  },
  {
    date: "2/5/18",
    closing: 3.248,
  },
  {
    date: "2/6/18",
    closing: 3.2335,
  },
  {
    date: "2/7/18",
    closing: 3.2335,
  },
  {
    date: "2/8/18",
    closing: 3.2335,
  },
  {
    date: "2/9/18",
    closing: 3.2277,
  },
  {
    date: "2/12/18",
    closing: 3.19,
  },
  {
    date: "2/13/18",
    closing: 3.1871,
  },
  {
    date: "2/14/18",
    closing: 3.19,
  },
  {
    date: "2/15/18",
    closing: 3.19,
  },
  {
    date: "2/16/18",
    closing: 3.19,
  },
  {
    date: "2/19/18",
    closing: 3.19,
  },
  {
    date: "2/20/18",
    closing: 3.19,
  },
  {
    date: "2/21/18",
    closing: 3.2335,
  },
  {
    date: "2/22/18",
    closing: 3.277,
  },
  {
    date: "2/23/18",
    closing: 3.248,
  },
  {
    date: "2/26/18",
    closing: 3.248,
  },
  {
    date: "2/27/18",
    closing: 3.2335,
  },
  {
    date: "2/28/18",
    closing: 3.19,
  },
  {
    date: "3/1/18",
    closing: 3.219,
  },
  {
    date: "3/2/18",
    closing: 3.2045,
  },
  {
    date: "3/5/18",
    closing: 3.19,
  },
  {
    date: "3/6/18",
    closing: 3.19,
  },
  {
    date: "3/7/18",
    closing: 3.2045,
  },
  {
    date: "3/8/18",
    closing: 3.19,
  },
  {
    date: "3/9/18",
    closing: 3.219,
  },
  {
    date: "3/12/18",
    closing: 3.2625,
  },
  {
    date: "3/13/18",
    closing: 3.306,
  },
  {
    date: "3/14/18",
    closing: 3.3118,
  },
  {
    date: "3/15/18",
    closing: 3.335,
  },
  {
    date: "3/16/18",
    closing: 3.3495,
  },
  {
    date: "3/19/18",
    closing: 3.3205,
  },
  {
    date: "3/20/18",
    closing: 3.306,
  },
  {
    date: "3/21/18",
    closing: 3.2712,
  },
  {
    date: "3/22/18",
    closing: 3.2625,
  },
  {
    date: "3/23/18",
    closing: 3.2625,
  },
  {
    date: "3/26/18",
    closing: 3.2857,
  },
  {
    date: "3/27/18",
    closing: 3.277,
  },
  {
    date: "3/28/18",
    closing: 3.2625,
  },
  {
    date: "4/2/18",
    closing: 3.2335,
  },
  {
    date: "4/3/18",
    closing: 3.19,
  },
  {
    date: "4/4/18",
    closing: 3.19,
  },
  {
    date: "4/5/18",
    closing: 3.2103,
  },
  {
    date: "4/6/18",
    closing: 3.2335,
  },
  {
    date: "4/9/18",
    closing: 3.2335,
  },
  {
    date: "4/10/18",
    closing: 3.2451,
  },
  {
    date: "4/11/18",
    closing: 3.2451,
  },
  {
    date: "4/12/18",
    closing: 3.2712,
  },
  {
    date: "4/16/18",
    closing: 3.2712,
  },
  {
    date: "4/17/18",
    closing: 3.3147,
  },
  {
    date: "4/18/18",
    closing: 3.3582,
  },
  {
    date: "4/19/18",
    closing: 3.4075,
  },
  {
    date: "4/20/18",
    closing: 3.3495,
  },
  {
    date: "4/23/18",
    closing: 3.364,
  },
  {
    date: "4/24/18",
    closing: 3.3524,
  },
  {
    date: "4/25/18",
    closing: 3.3843,
  },
  {
    date: "4/26/18",
    closing: 3.422,
  },
  {
    date: "4/27/18",
    closing: 3.4249,
  },
  {
    date: "4/30/18",
    closing: 3.4655,
  },
  {
    date: "5/2/18",
    closing: 3.4655,
  },
  {
    date: "5/3/18",
    closing: 3.3872,
  },
  {
    date: "5/4/18",
    closing: 3.306,
  },
  {
    date: "5/7/18",
    closing: 3.335,
  },
  {
    date: "5/8/18",
    closing: 3.3785,
  },
  {
    date: "5/9/18",
    closing: 3.4191,
  },
  {
    date: "5/10/18",
    closing: 3.4655,
  },
  {
    date: "5/11/18",
    closing: 3.451,
  },
  {
    date: "5/14/18",
    closing: 3.364,
  },
  {
    date: "5/15/18",
    closing: 3.3785,
  },
  {
    date: "5/16/18",
    closing: 3.364,
  },
  {
    date: "5/17/18",
    closing: 3.422,
  },
  {
    date: "5/18/18",
    closing: 3.4771,
  },
  {
    date: "5/21/18",
    closing: 3.451,
  },
  {
    date: "5/22/18",
    closing: 3.4452,
  },
  {
    date: "5/23/18",
    closing: 3.4365,
  },
  {
    date: "5/24/18",
    closing: 3.4626,
  },
  {
    date: "5/25/18",
    closing: 3.422,
  },
  {
    date: "5/28/18",
    closing: 3.4075,
  },
  {
    date: "5/29/18",
    closing: 3.3785,
  },
  {
    date: "5/30/18",
    closing: 3.4075,
  },
  {
    date: "5/31/18",
    closing: 3.364,
  },
  {
    date: "6/1/18",
    closing: 3.3727,
  },
  {
    date: "6/4/18",
    closing: 3.364,
  },
  {
    date: "6/5/18",
    closing: 3.3379,
  },
  {
    date: "6/6/18",
    closing: 3.3495,
  },
  {
    date: "6/7/18",
    closing: 3.4481,
  },
  {
    date: "6/8/18",
    closing: 3.422,
  },
  {
    date: "6/11/18",
    closing: 3.422,
  },
  {
    date: "6/12/18",
    closing: 3.451,
  },
  {
    date: "6/13/18",
    closing: 3.451,
  },
  {
    date: "6/14/18",
    closing: 3.4365,
  },
  {
    date: "6/15/18",
    closing: 3.393,
  },
  {
    date: "6/18/18",
    closing: 3.3785,
  },
  {
    date: "6/19/18",
    closing: 3.393,
  },
  {
    date: "6/20/18",
    closing: 3.364,
  },
  {
    date: "6/21/18",
    closing: 3.3524,
  },
  {
    date: "6/22/18",
    closing: 3.4017,
  },
  {
    date: "6/25/18",
    closing: 3.3495,
  },
  {
    date: "6/26/18",
    closing: 3.306,
  },
  {
    date: "6/27/18",
    closing: 3.2538,
  },
  {
    date: "6/28/18",
    closing: 3.2045,
  },
  {
    date: "7/2/18",
    closing: 3.248,
  },
  {
    date: "7/3/18",
    closing: 3.3321,
  },
  {
    date: "7/4/18",
    closing: 3.306,
  },
  {
    date: "7/5/18",
    closing: 3.2654,
  },
  {
    date: "7/6/18",
    closing: 3.2625,
  },
  {
    date: "7/9/18",
    closing: 3.2683,
  },
  {
    date: "7/10/18",
    closing: 3.306,
  },
  {
    date: "7/11/18",
    closing: 3.2741,
  },
  {
    date: "7/12/18",
    closing: 3.306,
  },
  {
    date: "7/13/18",
    closing: 3.2915,
  },
  {
    date: "7/16/18",
    closing: 3.3089,
  },
  {
    date: "7/17/18",
    closing: 3.364,
  },
  {
    date: "7/18/18",
    closing: 3.335,
  },
  {
    date: "7/19/18",
    closing: 3.3205,
  },
  {
    date: "7/20/18",
    closing: 3.306,
  },
  {
    date: "7/23/18",
    closing: 3.3495,
  },
  {
    date: "7/24/18",
    closing: 3.3495,
  },
  {
    date: "7/25/18",
    closing: 3.364,
  },
  {
    date: "7/26/18",
    closing: 3.4075,
  },
  {
    date: "7/27/18",
    closing: 3.422,
  },
  {
    date: "7/30/18",
    closing: 3.4075,
  },
  {
    date: "7/31/18",
    closing: 3.4046,
  },
  {
    date: "8/1/18",
    closing: 3.3785,
  },
  {
    date: "8/2/18",
    closing: 3.3611,
  },
  {
    date: "8/3/18",
    closing: 3.3611,
  },
  {
    date: "8/6/18",
    closing: 3.3205,
  },
  {
    date: "8/7/18",
    closing: 3.3205,
  },
  {
    date: "8/8/18",
    closing: 3.3205,
  },
  {
    date: "8/9/18",
    closing: 3.3205,
  },
  {
    date: "8/10/18",
    closing: 3.306,
  },
  {
    date: "8/13/18",
    closing: 3.277,
  },
  {
    date: "8/14/18",
    closing: 3.2625,
  },
  {
    date: "8/15/18",
    closing: 3.2625,
  },
  {
    date: "8/16/18",
    closing: 3.2335,
  },
  {
    date: "8/17/18",
    closing: 3.2335,
  },
  {
    date: "8/20/18",
    closing: 3.219,
  },
  {
    date: "8/21/18",
    closing: 3.1958,
  },
  {
    date: "8/22/18",
    closing: 3.19,
  },
  {
    date: "8/23/18",
    closing: 3.19,
  },
  {
    date: "8/24/18",
    closing: 3.19,
  },
  {
    date: "8/27/18",
    closing: 3.219,
  },
  {
    date: "8/28/18",
    closing: 3.219,
  },
  {
    date: "8/29/18",
    closing: 3.2045,
  },
  {
    date: "8/31/18",
    closing: 3.161,
  },
  {
    date: "9/3/18",
    closing: 3.161,
  },
  {
    date: "9/4/18",
    closing: 3.103,
  },
  {
    date: "9/5/18",
    closing: 3.045,
  },
  {
    date: "9/6/18",
    closing: 3.045,
  },
  {
    date: "9/7/18",
    closing: 3.045,
  },
  {
    date: "9/10/18",
    closing: 3.0015,
  },
  {
    date: "9/11/18",
    closing: 2.9145,
  },
  {
    date: "9/12/18",
    closing: 2.929,
  },
  {
    date: "9/13/18",
    closing: 2.958,
  },
  {
    date: "9/14/18",
    closing: 2.9435,
  },
  {
    date: "9/17/18",
    closing: 2.9319,
  },
  {
    date: "9/18/18",
    closing: 2.929,
  },
  {
    date: "9/19/18",
    closing: 2.9435,
  },
  {
    date: "9/20/18",
    closing: 2.929,
  },
  {
    date: "9/21/18",
    closing: 2.9609,
  },
  {
    date: "9/24/18",
    closing: 2.9754,
  },
  {
    date: "9/25/18",
    closing: 3.0189,
  },
  {
    date: "9/26/18",
    closing: 3.0305,
  },
  {
    date: "9/27/18",
    closing: 3.045,
  },
  {
    date: "9/28/18",
    closing: 3.0595,
  },
  {
    date: "10/1/18",
    closing: 3.0595,
  },
  {
    date: "10/2/18",
    closing: 3.074,
  },
  {
    date: "10/3/18",
    closing: 3.0595,
  },
  {
    date: "10/4/18",
    closing: 3.045,
  },
  {
    date: "10/5/18",
    closing: 3.016,
  },
  {
    date: "10/9/18",
    closing: 3.0015,
  },
  {
    date: "10/10/18",
    closing: 2.9725,
  },
  {
    date: "10/11/18",
    closing: 2.929,
  },
  {
    date: "10/12/18",
    closing: 2.9145,
  },
  {
    date: "10/15/18",
    closing: 2.9145,
  },
  {
    date: "10/16/18",
    closing: 2.9145,
  },
  {
    date: "10/17/18",
    closing: 2.9,
  },
  {
    date: "10/18/18",
    closing: 2.8855,
  },
  {
    date: "10/19/18",
    closing: 2.9058,
  },
  {
    date: "10/22/18",
    closing: 2.8855,
  },
  {
    date: "10/23/18",
    closing: 2.8855,
  },
  {
    date: "10/24/18",
    closing: 2.8884,
  },
  {
    date: "10/25/18",
    closing: 2.8884,
  },
  {
    date: "10/26/18",
    closing: 2.871,
  },
  {
    date: "10/29/18",
    closing: 2.8565,
  },
  {
    date: "10/30/18",
    closing: 2.8565,
  },
  {
    date: "10/31/18",
    closing: 2.8275,
  },
  {
    date: "11/2/18",
    closing: 2.8333,
  },
  {
    date: "11/5/18",
    closing: 2.8855,
  },
  {
    date: "11/6/18",
    closing: 2.8913,
  },
  {
    date: "11/7/18",
    closing: 2.8942,
  },
  {
    date: "11/8/18",
    closing: 2.9,
  },
  {
    date: "11/9/18",
    closing: 2.8913,
  },
  {
    date: "11/12/18",
    closing: 2.842,
  },
  {
    date: "11/13/18",
    closing: 2.8449,
  },
  {
    date: "11/14/18",
    closing: 2.8449,
  },
  {
    date: "11/15/18",
    closing: 2.8449,
  },
  {
    date: "11/16/18",
    closing: 2.8739,
  },
  {
    date: "11/19/18",
    closing: 2.8855,
  },
  {
    date: "11/20/18",
    closing: 2.8594,
  },
  {
    date: "11/21/18",
    closing: 2.8594,
  },
  {
    date: "11/22/18",
    closing: 2.8507,
  },
  {
    date: "11/23/18",
    closing: 2.8594,
  },
  {
    date: "11/26/18",
    closing: 2.871,
  },
  {
    date: "11/27/18",
    closing: 2.9,
  },
  {
    date: "11/28/18",
    closing: 2.958,
  },
  {
    date: "11/29/18",
    closing: 2.987,
  },
  {
    date: "11/30/18",
    closing: 2.987,
  },
  {
    date: "12/3/18",
    closing: 2.9725,
  },
  {
    date: "12/4/18",
    closing: 3.0305,
  },
  {
    date: "12/5/18",
    closing: 3.0305,
  },
  {
    date: "12/6/18",
    closing: 2.9725,
  },
  {
    date: "12/7/18",
    closing: 2.9435,
  },
  {
    date: "12/10/18",
    closing: 2.9377,
  },
  {
    date: "12/11/18",
    closing: 2.9377,
  },
  {
    date: "12/12/18",
    closing: 2.9464,
  },
  {
    date: "12/13/18",
    closing: 2.9464,
  },
  {
    date: "12/14/18",
    closing: 2.929,
  },
  {
    date: "12/17/18",
    closing: 2.9725,
  },
  {
    date: "12/18/18",
    closing: 2.929,
  },
  {
    date: "12/19/18",
    closing: 2.929,
  },
  {
    date: "12/20/18",
    closing: 2.929,
  },
  {
    date: "12/21/18",
    closing: 2.9,
  },
  {
    date: "12/24/18",
    closing: 2.9,
  },
  {
    date: "12/26/18",
    closing: 2.8942,
  },
  {
    date: "12/27/18",
    closing: 2.8855,
  },
  {
    date: "12/28/18",
    closing: 2.8855,
  },
  {
    date: "1/2/19",
    closing: 2.871,
  },
  {
    date: "1/3/19",
    closing: 2.871,
  },
  {
    date: "1/4/19",
    closing: 2.9,
  },
  {
    date: "1/7/19",
    closing: 2.9,
  },
  {
    date: "1/8/19",
    closing: 2.9,
  },
  {
    date: "1/9/19",
    closing: 2.929,
  },
  {
    date: "1/10/19",
    closing: 2.9435,
  },
  {
    date: "1/11/19",
    closing: 2.9348,
  },
  {
    date: "1/14/19",
    closing: 2.958,
  },
  {
    date: "1/15/19",
    closing: 2.958,
  },
  {
    date: "1/16/19",
    closing: 2.958,
  },
  {
    date: "1/17/19",
    closing: 2.958,
  },
  {
    date: "1/18/19",
    closing: 2.9464,
  },
  {
    date: "1/21/19",
    closing: 2.9435,
  },
  {
    date: "1/22/19",
    closing: 2.9435,
  },
  {
    date: "1/23/19",
    closing: 2.958,
  },
  {
    date: "1/24/19",
    closing: 2.9812,
  },
  {
    date: "1/25/19",
    closing: 3.0595,
  },
  {
    date: "1/28/19",
    closing: 3.0305,
  },
  {
    date: "1/29/19",
    closing: 3.0305,
  },
  {
    date: "1/30/19",
    closing: 3.0363,
  },
  {
    date: "1/31/19",
    closing: 3.0624,
  },
  {
    date: "2/1/19",
    closing: 3.277,
  },
  {
    date: "2/4/19",
    closing: 3.3495,
  },
  {
    date: "2/5/19",
    closing: 3.2915,
  },
  {
    date: "2/6/19",
    closing: 3.277,
  },
  {
    date: "2/7/19",
    closing: 3.3234,
  },
  {
    date: "2/8/19",
    closing: 3.3234,
  },
  {
    date: "2/11/19",
    closing: 3.306,
  },
  {
    date: "2/12/19",
    closing: 3.2799,
  },
  {
    date: "2/13/19",
    closing: 3.2944,
  },
  {
    date: "2/14/19",
    closing: 3.306,
  },
  {
    date: "2/15/19",
    closing: 3.2915,
  },
  {
    date: "2/18/19",
    closing: 3.248,
  },
  {
    date: "2/19/19",
    closing: 3.2654,
  },
  {
    date: "2/20/19",
    closing: 3.248,
  },
  {
    date: "2/21/19",
    closing: 3.248,
  },
  {
    date: "2/22/19",
    closing: 3.2654,
  },
  {
    date: "2/25/19",
    closing: 3.277,
  },
  {
    date: "2/26/19",
    closing: 3.2741,
  },
  {
    date: "2/27/19",
    closing: 3.2625,
  },
  {
    date: "2/28/19",
    closing: 3.2625,
  },
  {
    date: "3/1/19",
    closing: 3.277,
  },
  {
    date: "3/4/19",
    closing: 3.2625,
  },
  {
    date: "3/5/19",
    closing: 3.1871,
  },
  {
    date: "3/6/19",
    closing: 3.2045,
  },
  {
    date: "3/7/19",
    closing: 3.2335,
  },
  {
    date: "3/8/19",
    closing: 3.248,
  },
  {
    date: "3/11/19",
    closing: 3.248,
  },
  {
    date: "3/12/19",
    closing: 3.248,
  },
  {
    date: "3/13/19",
    closing: 3.2451,
  },
  {
    date: "3/14/19",
    closing: 3.2306,
  },
  {
    date: "3/15/19",
    closing: 3.2451,
  },
  {
    date: "3/18/19",
    closing: 3.2625,
  },
  {
    date: "3/19/19",
    closing: 3.2596,
  },
  {
    date: "3/20/19",
    closing: 3.248,
  },
  {
    date: "3/21/19",
    closing: 3.2422,
  },
  {
    date: "3/22/19",
    closing: 3.2335,
  },
  {
    date: "3/25/19",
    closing: 3.2045,
  },
  {
    date: "3/26/19",
    closing: 3.19,
  },
  {
    date: "3/27/19",
    closing: 3.161,
  },
  {
    date: "3/28/19",
    closing: 3.1465,
  },
  {
    date: "3/29/19",
    closing: 3.1465,
  },
  {
    date: "4/1/19",
    closing: 3.1465,
  },
  {
    date: "4/2/19",
    closing: 3.2045,
  },
  {
    date: "4/3/19",
    closing: 3.2335,
  },
  {
    date: "4/4/19",
    closing: 3.248,
  },
  {
    date: "4/5/19",
    closing: 3.2335,
  },
  {
    date: "4/8/19",
    closing: 3.219,
  },
  {
    date: "4/9/19",
    closing: 3.2045,
  },
  {
    date: "4/10/19",
    closing: 3.2045,
  },
  {
    date: "4/11/19",
    closing: 3.2045,
  },
  {
    date: "4/12/19",
    closing: 3.219,
  },
  {
    date: "4/15/19",
    closing: 3.2045,
  },
  {
    date: "4/16/19",
    closing: 3.2045,
  },
  {
    date: "4/17/19",
    closing: 3.19,
  },
  {
    date: "4/22/19",
    closing: 3.2045,
  },
  {
    date: "4/23/19",
    closing: 3.19,
  },
  {
    date: "4/24/19",
    closing: 3.1059,
  },
  {
    date: "4/25/19",
    closing: 3.103,
  },
  {
    date: "4/26/19",
    closing: 3.103,
  },
  {
    date: "4/29/19",
    closing: 3.0885,
  },
  {
    date: "4/30/19",
    closing: 3.103,
  },
  {
    date: "5/2/19",
    closing: 3.103,
  },
  {
    date: "5/3/19",
    closing: 3.1059,
  },
  {
    date: "5/6/19",
    closing: 3.1059,
  },
  {
    date: "5/8/19",
    closing: 3.1175,
  },
  {
    date: "5/9/19",
    closing: 3.1175,
  },
  {
    date: "5/10/19",
    closing: 3.1465,
  },
  {
    date: "5/13/19",
    closing: 3.132,
  },
  {
    date: "5/14/19",
    closing: 3.132,
  },
  {
    date: "5/15/19",
    closing: 3.1175,
  },
  {
    date: "5/16/19",
    closing: 3.103,
  },
  {
    date: "5/17/19",
    closing: 3.045,
  },
  {
    date: "5/20/19",
    closing: 3.0566,
  },
  {
    date: "5/21/19",
    closing: 3.0595,
  },
  {
    date: "5/22/19",
    closing: 3.045,
  },
  {
    date: "5/23/19",
    closing: 3.0305,
  },
  {
    date: "5/24/19",
    closing: 3.0305,
  },
  {
    date: "5/27/19",
    closing: 3.045,
  },
  {
    date: "5/28/19",
    closing: 3.0595,
  },
  {
    date: "5/29/19",
    closing: 3.0769,
  },
  {
    date: "5/30/19",
    closing: 3.0769,
  },
  {
    date: "5/31/19",
    closing: 3.0856,
  },
  {
    date: "6/3/19",
    closing: 3.0885,
  },
  {
    date: "6/4/19",
    closing: 3.0885,
  },
  {
    date: "6/5/19",
    closing: 3.074,
  },
  {
    date: "6/6/19",
    closing: 3.0595,
  },
  {
    date: "6/7/19",
    closing: 3.0595,
  },
  {
    date: "6/10/19",
    closing: 3.0682,
  },
  {
    date: "6/11/19",
    closing: 3.0682,
  },
  {
    date: "6/12/19",
    closing: 3.0653,
  },
  {
    date: "6/13/19",
    closing: 3.0682,
  },
  {
    date: "6/14/19",
    closing: 3.0711,
  },
  {
    date: "6/17/19",
    closing: 3.0595,
  },
  {
    date: "6/18/19",
    closing: 3.074,
  },
  {
    date: "6/19/19",
    closing: 3.0421,
  },
  {
    date: "6/20/19",
    closing: 3.0421,
  },
  {
    date: "6/21/19",
    closing: 3.0276,
  },
  {
    date: "6/24/19",
    closing: 3.016,
  },
  {
    date: "6/25/19",
    closing: 2.9812,
  },
  {
    date: "6/26/19",
    closing: 2.9812,
  },
  {
    date: "6/27/19",
    closing: 2.9928,
  },
  {
    date: "6/28/19",
    closing: 2.9957,
  },
  {
    date: "7/1/19",
    closing: 2.9957,
  },
  {
    date: "7/2/19",
    closing: 3.0015,
  },
  {
    date: "7/3/19",
    closing: 2.9986,
  },
  {
    date: "7/4/19",
    closing: 3.0015,
  },
  {
    date: "7/5/19",
    closing: 2.9812,
  },
  {
    date: "7/8/19",
    closing: 2.9435,
  },
  {
    date: "7/9/19",
    closing: 2.9725,
  },
  {
    date: "7/10/19",
    closing: 2.9725,
  },
  {
    date: "7/11/19",
    closing: 3.0595,
  },
  {
    date: "7/12/19",
    closing: 3.103,
  },
  {
    date: "7/15/19",
    closing: 3.0595,
  },
  {
    date: "7/16/19",
    closing: 3.0885,
  },
  {
    date: "7/17/19",
    closing: 3.0885,
  },
  {
    date: "7/18/19",
    closing: 3.0885,
  },
  {
    date: "7/19/19",
    closing: 3.1175,
  },
  {
    date: "7/22/19",
    closing: 3.103,
  },
  {
    date: "7/23/19",
    closing: 3.1465,
  },
  {
    date: "7/24/19",
    closing: 3.161,
  },
  {
    date: "7/25/19",
    closing: 3.161,
  },
  {
    date: "7/26/19",
    closing: 3.161,
  },
  {
    date: "7/30/19",
    closing: 3.1001,
  },
  {
    date: "7/31/19",
    closing: 3.074,
  },
  {
    date: "8/1/19",
    closing: 2.9029,
  },
  {
    date: "8/2/19",
    closing: 2.9435,
  },
  {
    date: "8/5/19",
    closing: 2.8855,
  },
  {
    date: "8/6/19",
    closing: 2.842,
  },
  {
    date: "8/7/19",
    closing: 2.8275,
  },
  {
    date: "8/8/19",
    closing: 2.8565,
  },
  {
    date: "8/9/19",
    closing: 2.813,
  },
  {
    date: "8/12/19",
    closing: 2.784,
  },
  {
    date: "8/13/19",
    closing: 2.7985,
  },
  {
    date: "8/14/19",
    closing: 2.813,
  },
  {
    date: "8/15/19",
    closing: 2.813,
  },
  {
    date: "8/16/19",
    closing: 2.7985,
  },
  {
    date: "8/19/19",
    closing: 2.7985,
  },
  {
    date: "8/20/19",
    closing: 2.813,
  },
  {
    date: "8/21/19",
    closing: 2.7724,
  },
  {
    date: "8/22/19",
    closing: 2.7724,
  },
  {
    date: "8/23/19",
    closing: 2.7405,
  },
  {
    date: "8/26/19",
    closing: 2.726,
  },
  {
    date: "8/27/19",
    closing: 2.726,
  },
  {
    date: "8/28/19",
    closing: 2.7405,
  },
  {
    date: "8/29/19",
    closing: 2.755,
  },
  {
    date: "9/2/19",
    closing: 2.755,
  },
  {
    date: "9/3/19",
    closing: 2.755,
  },
  {
    date: "9/4/19",
    closing: 2.726,
  },
  {
    date: "9/5/19",
    closing: 2.7115,
  },
  {
    date: "9/6/19",
    closing: 2.726,
  },
  {
    date: "9/9/19",
    closing: 2.7144,
  },
  {
    date: "9/10/19",
    closing: 2.726,
  },
  {
    date: "9/11/19",
    closing: 2.726,
  },
  {
    date: "9/12/19",
    closing: 2.726,
  },
  {
    date: "9/13/19",
    closing: 2.726,
  },
  {
    date: "9/16/19",
    closing: 2.7231,
  },
  {
    date: "9/17/19",
    closing: 2.7231,
  },
  {
    date: "9/18/19",
    closing: 2.726,
  },
  {
    date: "9/19/19",
    closing: 2.6825,
  },
  {
    date: "9/20/19",
    closing: 2.697,
  },
  {
    date: "9/23/19",
    closing: 2.7115,
  },
  {
    date: "9/24/19",
    closing: 2.697,
  },
  {
    date: "9/25/19",
    closing: 2.6854,
  },
  {
    date: "9/26/19",
    closing: 2.6825,
  },
  {
    date: "9/27/19",
    closing: 2.697,
  },
  {
    date: "10/1/19",
    closing: 2.6332,
  },
  {
    date: "10/2/19",
    closing: 2.6245,
  },
  {
    date: "10/3/19",
    closing: 2.61,
  },
  {
    date: "10/4/19",
    closing: 2.6129,
  },
  {
    date: "10/7/19",
    closing: 2.6158,
  },
  {
    date: "10/9/19",
    closing: 2.61,
  },
  {
    date: "10/10/19",
    closing: 2.61,
  },
  {
    date: "10/11/19",
    closing: 2.668,
  },
  {
    date: "10/14/19",
    closing: 2.697,
  },
  {
    date: "10/15/19",
    closing: 2.697,
  },
  {
    date: "10/16/19",
    closing: 2.6854,
  },
  {
    date: "10/17/19",
    closing: 2.6999,
  },
  {
    date: "10/18/19",
    closing: 2.7289,
  },
  {
    date: "10/21/19",
    closing: 2.726,
  },
  {
    date: "10/22/19",
    closing: 2.7028,
  },
  {
    date: "10/23/19",
    closing: 2.6767,
  },
  {
    date: "10/24/19",
    closing: 2.6767,
  },
  {
    date: "10/25/19",
    closing: 2.668,
  },
  {
    date: "10/28/19",
    closing: 2.6767,
  },
  {
    date: "10/29/19",
    closing: 2.668,
  },
  {
    date: "10/30/19",
    closing: 2.6564,
  },
  {
    date: "10/31/19",
    closing: 2.6593,
  },
  {
    date: "11/4/19",
    closing: 2.668,
  },
  {
    date: "11/5/19",
    closing: 2.668,
  },
  {
    date: "11/6/19",
    closing: 2.668,
  },
  {
    date: "11/7/19",
    closing: 2.668,
  },
  {
    date: "11/8/19",
    closing: 2.61,
  },
  {
    date: "11/11/19",
    closing: 2.61,
  },
  {
    date: "11/12/19",
    closing: 2.61,
  },
  {
    date: "11/13/19",
    closing: 2.61,
  },
  {
    date: "11/14/19",
    closing: 2.61,
  },
  {
    date: "11/15/19",
    closing: 2.61,
  },
  {
    date: "11/18/19",
    closing: 2.5897,
  },
  {
    date: "11/19/19",
    closing: 2.5665,
  },
  {
    date: "11/20/19",
    closing: 2.5781,
  },
  {
    date: "11/21/19",
    closing: 2.581,
  },
  {
    date: "11/22/19",
    closing: 2.581,
  },
  {
    date: "11/25/19",
    closing: 2.581,
  },
  {
    date: "11/26/19",
    closing: 2.581,
  },
  {
    date: "11/27/19",
    closing: 2.552,
  },
  {
    date: "11/28/19",
    closing: 2.5375,
  },
  {
    date: "11/29/19",
    closing: 2.552,
  },
  {
    date: "12/2/19",
    closing: 2.552,
  },
  {
    date: "12/3/19",
    closing: 2.5085,
  },
  {
    date: "12/4/19",
    closing: 2.465,
  },
  {
    date: "12/5/19",
    closing: 2.465,
  },
  {
    date: "12/6/19",
    closing: 2.4766,
  },
  {
    date: "12/9/19",
    closing: 2.4998,
  },
  {
    date: "12/10/19",
    closing: 2.5955,
  },
  {
    date: "12/11/19",
    closing: 2.552,
  },
  {
    date: "12/12/19",
    closing: 2.5375,
  },
  {
    date: "12/13/19",
    closing: 2.5375,
  },
  {
    date: "12/16/19",
    closing: 2.523,
  },
  {
    date: "12/17/19",
    closing: 2.523,
  },
  {
    date: "12/18/19",
    closing: 2.5491,
  },
  {
    date: "12/19/19",
    closing: 2.668,
  },
  {
    date: "12/20/19",
    closing: 2.668,
  },
  {
    date: "12/23/19",
    closing: 2.668,
  },
  {
    date: "12/24/19",
    closing: 2.6651,
  },
  {
    date: "12/26/19",
    closing: 2.668,
  },
  {
    date: "12/27/19",
    closing: 2.668,
  },
  {
    date: "12/30/19",
    closing: 2.668,
  },
  {
    date: "12/31/19",
    closing: 2.668,
  },
  {
    date: "1/2/20",
    closing: 2.6651,
  },
  {
    date: "1/3/20",
    closing: 2.6535,
  },
  {
    date: "1/6/20",
    closing: 2.6535,
  },
  {
    date: "1/7/20",
    closing: 2.6477,
  },
  {
    date: "1/8/20",
    closing: 2.6332,
  },
  {
    date: "1/9/20",
    closing: 2.61,
  },
  {
    date: "1/10/20",
    closing: 2.61,
  },
  {
    date: "1/13/20",
    closing: 2.5868,
  },
  {
    date: "1/14/20",
    closing: 2.61,
  },
  {
    date: "1/15/20",
    closing: 2.6245,
  },
  {
    date: "1/16/20",
    closing: 2.61,
  },
  {
    date: "1/17/20",
    closing: 2.61,
  },
  {
    date: "1/20/20",
    closing: 2.61,
  },
  {
    date: "1/21/20",
    closing: 2.639,
  },
  {
    date: "1/22/20",
    closing: 2.6593,
  },
  {
    date: "1/23/20",
    closing: 2.668,
  },
  {
    date: "1/24/20",
    closing: 2.6738,
  },
  {
    date: "1/27/20",
    closing: 2.6651,
  },
  {
    date: "1/28/20",
    closing: 2.668,
  },
  {
    date: "1/29/20",
    closing: 2.697,
  },
  {
    date: "1/30/20",
    closing: 2.697,
  },
  {
    date: "1/31/20",
    closing: 2.639,
  },
  {
    date: "2/3/20",
    closing: 2.6245,
  },
  {
    date: "2/4/20",
    closing: 2.639,
  },
  {
    date: "2/5/20",
    closing: 2.6535,
  },
  {
    date: "2/6/20",
    closing: 2.6535,
  },
  {
    date: "2/7/20",
    closing: 2.6535,
  },
  {
    date: "2/10/20",
    closing: 2.668,
  },
  {
    date: "2/11/20",
    closing: 2.6825,
  },
  {
    date: "2/12/20",
    closing: 2.6535,
  },
  {
    date: "2/13/20",
    closing: 2.6535,
  },
  {
    date: "2/14/20",
    closing: 2.6535,
  },
  {
    date: "2/17/20",
    closing: 2.6448,
  },
  {
    date: "2/18/20",
    closing: 2.6303,
  },
  {
    date: "2/19/20",
    closing: 2.639,
  },
  {
    date: "2/20/20",
    closing: 2.639,
  },
  {
    date: "2/21/20",
    closing: 2.639,
  },
  {
    date: "2/24/20",
    closing: 2.6245,
  },
  {
    date: "2/25/20",
    closing: 2.61,
  },
  {
    date: "2/26/20",
    closing: 2.581,
  },
  {
    date: "2/27/20",
    closing: 2.4998,
  },
  {
    date: "2/28/20",
    closing: 2.465,
  },
  {
    date: "3/2/20",
    closing: 2.4795,
  },
  {
    date: "3/3/20",
    closing: 2.523,
  },
  {
    date: "3/4/20",
    closing: 2.5375,
  },
  {
    date: "3/5/20",
    closing: 2.5491,
  },
  {
    date: "3/6/20",
    closing: 2.494,
  },
  {
    date: "3/9/20",
    closing: 2.4099,
  },
  {
    date: "3/10/20",
    closing: 2.436,
  },
  {
    date: "3/11/20",
    closing: 2.3867,
  },
  {
    date: "3/12/20",
    closing: 2.146,
  },
  {
    date: "3/13/20",
    closing: 2.1025,
  },
  {
    date: "3/16/20",
    closing: 2.03,
  },
  {
    date: "3/17/20",
    closing: 2.0735,
  },
  {
    date: "3/18/20",
    closing: 2.088,
  },
  {
    date: "3/19/20",
    closing: 2.117,
  },
  {
    date: "3/20/20",
    closing: 2.1895,
  },
  {
    date: "3/23/20",
    closing: 2.2475,
  },
  {
    date: "3/24/20",
    closing: 2.291,
  },
  {
    date: "3/25/20",
    closing: 2.291,
  },
  {
    date: "3/26/20",
    closing: 2.32,
  },
  {
    date: "3/27/20",
    closing: 2.32,
  },
  {
    date: "3/30/20",
    closing: 2.204,
  },
  {
    date: "3/31/20",
    closing: 2.1315,
  },
  {
    date: "4/1/20",
    closing: 2.117,
  },
  {
    date: "4/2/20",
    closing: 2.1025,
  },
  {
    date: "4/3/20",
    closing: 2.03,
  },
  {
    date: "4/6/20",
    closing: 2.03,
  },
  {
    date: "4/7/20",
    closing: 2.03,
  },
  {
    date: "4/8/20",
    closing: 2.0271,
  },
  {
    date: "4/13/20",
    closing: 2.03,
  },
  {
    date: "4/14/20",
    closing: 2.03,
  },
  {
    date: "4/15/20",
    closing: 2.0648,
  },
  {
    date: "4/16/20",
    closing: 2.1025,
  },
  {
    date: "4/17/20",
    closing: 2.204,
  },
  {
    date: "4/20/20",
    closing: 2.204,
  },
  {
    date: "4/21/20",
    closing: 2.1634,
  },
  {
    date: "4/22/20",
    closing: 2.088,
  },
  {
    date: "4/23/20",
    closing: 2.059,
  },
  {
    date: "4/24/20",
    closing: 2.03,
  },
  {
    date: "4/27/20",
    closing: 1.9749,
  },
  {
    date: "4/28/20",
    closing: 1.972,
  },
  {
    date: "4/29/20",
    closing: 1.9865,
  },
  {
    date: "4/30/20",
    closing: 1.9894,
  },
];

window.addEventListener("DOMContentLoaded", function (e) {
  initFrame();

  const svg = d3.select(".container svg"),
    margin = { top: 50, right: 80, bottom: 30, left: 30 },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var mask = d3
    .select("svg defs")
    .append("mask")
    .attr("id", "line-masknull")
    .attr("height", 500);
  var parseTime = d3.timeParse("%m/%d/%y");
  const bisectDate = d3.bisector(d => parseTime(d.date)).left;

  var x = d3.scaleTime().rangeRound([0, width]);
  var y = d3.scaleLinear().rangeRound([height, 0]);

  var line = d3
    .line()
    .x(d => x(parseTime(d.date)))
    .y(d => y(+d.closing));

  x.domain(d3.extent(data, d => parseTime(d.date)));
  y.domain([0, 4]);

  g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .select(".domain")
    .remove();

  g.append("g")
    .call(d3.axisLeft(y))
    .append("text")
    .attr("fill", "#000")
    .attr("x", 6)
    .attr("y", -20)
    .attr("dy", "0.71em")
    .attr("text-anchor", "start");

  g.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#60b993")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", 3)
    .attr("d", line)
    .attr("mask", "url(#line-masknull)");

  mask
    .append("rect")
    .attr("class", "highlight")
    .attr("height", 500)
    .attr("width", 0)
    .attr("x", 0)
    .style("opacity", 0.5)
    .style("fill", "rgb(250,250,250)")
    .attr("width", 100 + "%");
  mask
    .append("rect")
    .attr("height", 500)
    .attr("width", width)
    .attr("x", 0)
    .style("opacity", 0.2)
    .style("fill", "rgb(250,250,250)");

  g.append("line")
    .attr("x1", x(parseTime("3/22/19")))
    .attr("y1", y(3.2335))
    .attr("x2", x(parseTime("3/22/19")))
    .attr("y2", 5)
    .attr("stroke-width", 1)
    .attr("stroke-dasharray", 2)
    .attr("stroke", "#625f5d");
  g.append("line")
    .attr("x1", x(parseTime("3/22/19")))
    .attr("y1", 5)
    .attr("x2", 530)
    .attr("y2", 5)
    .attr("stroke-width", 1)
    .attr("stroke-dasharray", 2)
    .attr("stroke", "#625f5d");
  g.append("circle")
    .attr("cy", y(3.2335))
    .attr("cx", x(parseTime("3/22/19")))
    .attr("r", 3);
  g.append("g")
    .attr("class", "labels date")
    .append("text")
    .attr("x", 540)
    .attr("y", -10)
    .text("March 22, 2019:");
  g.append("g")
    .attr("class", "labels")
    .append("text")
    .attr("x", 540)
    .attr("y", 10)
    .text("Shipibo community submits RSPO complaint");

  //May 17, 2019: RSPO accepts complaint

  g.append("line")
    .attr("x1", x(parseTime("5/17/19")))
    .attr("y1", y(3.045))
    .attr("x2", x(parseTime("5/17/19")))
    .attr("y2", 75)
    .attr("stroke-width", 1)
    .attr("stroke-dasharray", 2)
    .attr("stroke", "#625f5d");
  g.append("line")
    .attr("x1", x(parseTime("5/17/19")))
    .attr("y1", 75)
    .attr("x2", 600)
    .attr("y2", 75)
    .attr("stroke-width", 1)
    .attr("stroke-dasharray", 2)
    .attr("stroke", "#625f5d");
  g.append("circle")
    .attr("cy", y(3.045))
    .attr("cx", x(parseTime("5/17/19")))
    .attr("r", 3);
  g.append("g")
    .attr("class", "labels date")
    .append("text")
    .attr("x", 610)
    .attr("y", 60)
    .text("May 17, 2019:");
  g.append("g")
    .attr("class", "labels")
    .append("text")
    .attr("x", 610)
    .attr("y", 80)
    .text("RSPO accepts complaint");

  //Aug. 23 2019: Complaint filed with European investors
  g.append("line")
    .attr("x1", x(parseTime("8/23/19")))
    .attr("y1", y(2.7405))
    .attr("x2", 600)
    .attr("y2", 275)
    .attr("stroke-width", 1)
    .attr("stroke-dasharray", 2)
    .attr("stroke", "#625f5d");
  g.append("line")
    .attr("x1", 600)
    .attr("y1", 275)
    .attr("x2", 565)
    .attr("y2", 275)
    .attr("stroke-width", 1)
    .attr("stroke-dasharray", 2)
    .attr("stroke", "#625f5d");
  g.append("circle")
    .attr("cy", y(2.7405))
    .attr("cx", x(parseTime("8/23/19")))
    .attr("r", 3);
  g.append("g")
    .attr("class", "labels date")
    .append("text")
    .attr("x", 300)
    .attr("y", 260)
    .text("Aug. 23 2019:");
  g.append("g")
    .attr("class", "labels")
    .append("text")
    .attr("x", 300)
    .attr("y", 280)
    .text("Complaint filed with European investors");

  //March 5, 2020: NIBM sells $12.3 million in shares
  g.append("line")
    .attr("x1", x(parseTime("3/5/20")))
    .attr("y1", y(2.5491))
    .attr("x2", 790)
    .attr("y2", 360)
    .attr("stroke-width", 1)
    .attr("stroke-dasharray", 2)
    .attr("stroke", "#625f5d");
  g.append("line")
    .attr("x1", 790)
    .attr("y1", 360)
    .attr("x2", 770)
    .attr("y2", 360)
    .attr("stroke-width", 1)
    .attr("stroke-dasharray", 2)
    .attr("stroke", "#625f5d");
  g.append("circle")
    .attr("cy", y(2.5491))
    .attr("cx", x(parseTime("3/5/20")))
    .attr("r", 3);
  g.append("g")
    .attr("class", "labels date")
    .append("text")
    .attr("x", 550)
    .attr("y", 345)
    .text("March 5, 2020:");
  g.append("g")
    .attr("class", "labels")
    .append("text")
    .attr("x", 550)
    .attr("y", 365)
    .text("NIBM sells $12.3 million in shares");

  var focus = g.append("g").attr("class", "focus").style("display", "none");
  var focus2 = g.append("g").attr("class", "focus").style("display", "none");
  focus.append("circle").attr("r", 7.5);

  focus.append("text").attr("x", 15).attr("dy", ".31em");
  focus2.append("text").attr("x", 15).attr("dy", ".31em");

  svg
    .append("rect")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .attr("class", "overlay")
    .attr("width", width)
    .attr("height", height)
    .on("mouseover", function () {
      focus.style("display", null);
      focus2.style("display", null);
    })
    .on("mouseout", function () {
      focus.style("display", "none");
      focus2.style("display", "none");
      mask.select(".highlight").attr("width", "100%");
    })
    .on("mousemove", mousemove);

  function mousemove() {
    var x0 = x.invert(d3.mouse(this)[0]),
      i = bisectDate(data, x0, 1),
      d0 = data[i - 1],
      d1 = data[i],
      d = x0 - d0.date > d1.date - x0 ? d1 : d0;
    focus.attr(
      "transform",
      "translate(" + x(parseTime(d.date)) + "," + y(d.closing) + ")"
    );
    focus2.attr(
      "transform",
      "translate(" + x(parseTime(d.date)) + "," + (y(d.closing) + 15) + ")"
    );
    focus.select("text").text(`${d.date}`);
    focus2.select("text").text(`$${d.closing.toFixed(2)}`);

    mask.select(".highlight").attr("width", x(parseTime(d.date)));
  }
});
