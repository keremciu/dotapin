import React from "react";

const renderIcons = type => {
  switch (type) {
    case "move":
      return (
        <g>
          <path d="M20.0094981,10.2279423 C20.0616836,10.2670814 20.0975606,10.3127431 20.1171302,10.3649286 C20.1366997,10.4171141 20.1464844,10.4758219 20.1464844,10.5410538 C20.1464844,10.5932394 20.1366997,10.6486856 20.1171302,10.7073944 C20.0975606,10.7661031 20.0616836,10.8150263 20.0094981,10.8541654 L19.8529423,11.0107212 C19.8529423,11.0107212 19.8464192,11.0172443 19.8333728,11.0302906 L17.3480499,13.2807799 C17.2567253,13.3721045 17.1458327,13.4177662 17.0153689,13.4177662 C16.8849051,13.4177662 16.7740126,13.3721045 16.6826879,13.2807799 L16.5652711,13.1242241 C16.4739464,13.0328994 16.4380694,12.9252684 16.457639,12.8013278 C16.4772085,12.6773872 16.5326548,12.5762793 16.6239795,12.498001 L18.1308288,11.1477075 L10.8314159,11.1477075 L10.8314159,18.4666899 L12.1817094,16.9598405 C12.2730341,16.8685159 12.3774036,16.8130696 12.494821,16.7935 C12.6122384,16.7739305 12.7166079,16.8098075 12.8079325,16.9011321 L12.9644883,17.018549 C13.0558129,17.1098736 13.1014746,17.2207662 13.1014746,17.35123 C13.1014746,17.4816938 13.0558129,17.5925863 12.9644883,17.683911 L10.6552906,20.2083728 C10.6552906,20.2214192 10.6552906,20.2279423 10.6552906,20.2279423 C10.6552906,20.2279423 10.6487675,20.2279423 10.6357212,20.2279423 L10.4791654,20.3844981 C10.4400263,20.4366836 10.3943646,20.4725606 10.3421791,20.4921302 C10.2899936,20.5116997 10.2312857,20.5214844 10.1660538,20.5214844 C10.1138683,20.5214844 10.058422,20.5116997 9.99971334,20.4921302 C9.94100463,20.4725606 9.89208144,20.4366836 9.8529423,20.3844981 L9.69638653,20.2279423 C9.69638653,20.2279423 9.68986344,20.2214192 9.67681706,20.2083728 L7.42632782,17.7230499 C7.33500316,17.6317253 7.28934152,17.5208327 7.28934152,17.3903689 C7.28934152,17.2599051 7.33500316,17.1490126 7.42632782,17.0576879 L7.58288359,16.9402711 C7.67420825,16.8489464 7.78183927,16.8130694 7.90577987,16.832639 C8.02972048,16.8522085 8.13082841,16.9076548 8.20910668,16.9989795 L9.55940023,18.5058288 L9.55940023,11.1477075 L2.14257048,11.1477075 L3.66898927,12.498001 C3.76031392,12.5762793 3.81576021,12.6773872 3.83532978,12.8013278 C3.85489935,12.9252684 3.81902234,13.0328994 3.72769768,13.1242241 L3.61028085,13.2807799 C3.51895619,13.3721045 3.40806363,13.4177662 3.27759983,13.4177662 C3.14713604,13.4177662 3.03624347,13.3721045 2.94491882,13.2807799 L0.459595921,11.0302906 C0.446549541,11.0172443 0.440026449,11.0107212 0.440026449,11.0107212 L0.283470676,10.8541654 C0.231285158,10.8150263 0.195408152,10.7661031 0.175838582,10.7073944 C0.156269013,10.6486856 0.146484375,10.5932394 0.146484375,10.5410538 C0.146484375,10.4758219 0.156269013,10.4171141 0.175838582,10.3649286 C0.195408152,10.3127431 0.231285158,10.2670814 0.283470676,10.2279423 L0.303040148,10.1888034 C0.329132907,10.1366178 0.365009913,10.0909562 0.410672242,10.0518171 C0.456334571,10.0126779 0.505257761,9.98006246 0.557443279,9.9539697 L2.98405776,7.7426194 C3.07538242,7.65129475 3.18627498,7.6056331 3.31673878,7.6056331 C3.44720257,7.6056331 3.55809514,7.65129475 3.6494198,7.7426194 L3.76683663,7.89917518 C3.85816128,7.99049983 3.89403829,8.09486931 3.87446872,8.21228672 C3.85489915,8.32970414 3.79945287,8.43407361 3.70812821,8.52539827 L2.2012789,9.87569181 L9.55940023,9.87569181 L9.55940023,2.53713995 L8.20910668,4.04398927 C8.13082841,4.13531392 8.02972048,4.19076021 7.90577987,4.21032978 C7.78183927,4.22989935 7.67420825,4.19402234 7.58288359,4.10269768 L7.42632782,3.98528085 C7.33500316,3.89395619 7.28934152,3.78306363 7.28934152,3.65259983 C7.28934152,3.52213604 7.33500316,3.41124347 7.42632782,3.31991882 L9.67681706,0.834595921 C9.68986344,0.821549541 9.69638653,0.815026449 9.69638653,0.815026449 L9.8529423,0.658470676 C9.89208144,0.606285158 9.94100463,0.570408152 9.99971334,0.550838582 C10.058422,0.531269013 10.1138683,0.521484375 10.1660538,0.521484375 C10.2312857,0.521484375 10.2899936,0.531269013 10.3421791,0.550838582 C10.3943646,0.570408152 10.4400263,0.606285158 10.4791654,0.658470676 L10.5183043,0.678040148 C10.5704899,0.704132907 10.6161515,0.740009913 10.6552906,0.785672242 C10.6944298,0.831334571 10.7270452,0.880257761 10.753138,0.932443279 L12.9644883,3.35905776 C13.0558129,3.45038242 13.1014746,3.56127498 13.1014746,3.69173878 C13.1014746,3.82220257 13.0558129,3.93309514 12.9644883,4.0244198 L12.8079325,4.14183663 C12.7166079,4.23316128 12.6122384,4.26903829 12.494821,4.24946872 C12.3774036,4.22989915 12.2730341,4.17445287 12.1817094,4.08312821 L10.8118464,2.5762789 L10.8118464,9.89526128 L18.0916899,9.89526128 L16.5848405,8.52539827 C16.4935159,8.43407361 16.4380696,8.32970414 16.4185,8.21228672 C16.3989305,8.09486931 16.4348075,7.99049983 16.5261321,7.89917518 L16.643549,7.7426194 C16.7348736,7.65129475 16.8457662,7.6056331 16.97623,7.6056331 C17.1066938,7.6056331 17.2175863,7.65129475 17.308911,7.7426194 L19.8333728,10.0518171 C19.8464192,10.0518171 19.8529423,10.0518171 19.8529423,10.0518171 C19.8529423,10.0518171 19.8529423,10.0583401 19.8529423,10.0713865 L20.0094981,10.2279423 Z" />
        </g>
      );
    case "stop":
      return (
        <g>
          <path d="M10,0.25 C11.3802152,0.25 12.6790304,0.510414062 13.8964844,1.03125 C15.1139384,1.55208594 16.1751257,2.26496943 17.0800781,3.16992188 C17.9850306,4.07487432 18.6979141,5.13606162 19.21875,6.35351562 C19.7395859,7.57096963 20,8.86978477 20,10.25 C20,11.6302152 19.7395859,12.9290304 19.21875,14.1464844 C18.6979141,15.3639384 17.9850306,16.4251257 17.0800781,17.3300781 C16.1751257,18.2350306 15.1139384,18.9479141 13.8964844,19.46875 C12.6790304,19.9895859 11.3802152,20.25 10,20.25 C8.61978477,20.25 7.32096963,19.9895859 6.10351562,19.46875 C4.88606162,18.9479141 3.82487432,18.2350306 2.91992188,17.3300781 C2.01496943,16.4251257 1.30208594,15.3639384 0.78125,14.1464844 C0.260414062,12.9290304 0,11.6302152 0,10.25 C0,8.86978477 0.260414062,7.57096963 0.78125,6.35351562 C1.30208594,5.13606162 2.01496943,4.07487432 2.91992188,3.16992188 C3.82487432,2.26496943 4.88606162,1.55208594 6.10351562,1.03125 C7.32096963,0.510414062 8.61978477,0.25 10,0.25 Z M10,19.0195312 C11.2109436,19.0195312 12.3469999,18.7884138 13.4082031,18.3261719 C14.4694063,17.86393 15.3938763,17.2356811 16.1816406,16.4414062 C16.969405,15.6471314 17.5943987,14.7194063 18.0566406,13.6582031 C18.5188825,12.5969999 18.75,11.4609436 18.75,10.25 C18.75,9.03905645 18.5188825,7.9030001 18.0566406,6.84179688 C17.5943987,5.78059365 16.969405,4.85612373 16.1816406,4.06835938 C15.3938763,3.28059502 14.4694063,2.65560127 13.4082031,2.19335938 C12.3469999,1.73111748 11.2109436,1.5 10,1.5 C8.78905645,1.5 7.6530001,1.73111748 6.59179688,2.19335938 C5.53059365,2.65560127 4.60612373,3.28059502 3.81835938,4.06835938 C3.03059502,4.85612373 2.40560127,5.78059365 1.94335938,6.84179688 C1.48111748,7.9030001 1.25,9.03905645 1.25,10.25 C1.25,11.4609436 1.48111748,12.5969999 1.94335938,13.6582031 C2.40560127,14.7194063 3.03059502,15.6471314 3.81835938,16.4414062 C4.60612373,17.2356811 5.53059365,17.86393 6.59179688,18.3261719 C7.6530001,18.7884138 8.78905645,19.0195312 10,19.0195312 Z M13.5351562,6.71484375 C13.6523443,6.83203184 13.7109375,6.97851475 13.7109375,7.15429688 C13.7109375,7.330079 13.6523443,7.47656191 13.5351562,7.59375 L10.8789062,10.25 L13.5351562,12.90625 C13.6523443,13.0234381 13.7109375,13.169921 13.7109375,13.3457031 C13.7109375,13.5214853 13.6523443,13.6679682 13.5351562,13.7851562 C13.4179682,13.9023443 13.2714853,13.9609375 13.0957031,13.9609375 C12.919921,13.9609375 12.7734381,13.9023443 12.65625,13.7851562 L10,11.1289062 L7.34375,13.7851562 C7.22656191,13.9023443 7.080079,13.9609375 6.90429688,13.9609375 C6.72851475,13.9609375 6.58203184,13.9023443 6.46484375,13.7851562 C6.34765566,13.6679682 6.2890625,13.5214853 6.2890625,13.3457031 C6.2890625,13.169921 6.34765566,13.0234381 6.46484375,12.90625 L9.12109375,10.25 L6.46484375,7.59375 C6.34765566,7.47656191 6.2890625,7.330079 6.2890625,7.15429688 C6.2890625,6.97851475 6.34765566,6.83203184 6.46484375,6.71484375 C6.58203184,6.59765566 6.72851475,6.5390625 6.90429688,6.5390625 C7.080079,6.5390625 7.22656191,6.59765566 7.34375,6.71484375 L10,9.37109375 L12.65625,6.71484375 C12.7734381,6.59765566 12.919921,6.5390625 13.0957031,6.5390625 C13.2714853,6.5390625 13.4179682,6.59765566 13.5351562,6.71484375 Z" />
        </g>
      );
    default: {
      return <g />;
    }
  }
};

export default renderIcons;