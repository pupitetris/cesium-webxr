import {
  Cartesian2,
  Cartesian3,
  Math as CesiumMath,
  Stereographic,
} from "../../index.js";

describe("Core/Stereographic", function () {
  it("construct with default values", function () {
    const stereographic = new Stereographic();
    expect(stereographic.x).toEqual(0.0);
    expect(stereographic.y).toEqual(0.0);
    expect(stereographic.tangentPlane).toEqual(
      Stereographic.NORTH_POLE_TANGENT_PLANE
    );
  });

  it("construct with values", function () {
    const stereographic = new Stereographic(
      new Cartesian2(1.0, 2.0),
      Stereographic.SOUTH_POLE_TANGENT_PLANE
    );
    expect(stereographic.x).toEqual(1.0);
    expect(stereographic.y).toEqual(2.0);
    expect(stereographic.tangentPlane).toEqual(
      Stereographic.SOUTH_POLE_TANGENT_PLANE
    );
  });

  it("fromCartesian constructs a Stereographic in the northern hemisphere", function () {
    const stereographic = new Stereographic.fromCartesian(
      Cartesian3.fromDegrees(30.0, 60.0)
    );
    expect(stereographic.x).toEqualEpsilon(0.1347555369, CesiumMath.EPSILON7);
    expect(stereographic.y).toEqualEpsilon(-0.2334034365, CesiumMath.EPSILON7);
    expect(stereographic.tangentPlane).toEqual(
      Stereographic.NORTH_POLE_TANGENT_PLANE
    );
  });

  it("fromCartesian constructs a Stereographic in the southern hemisphere", function () {
    const stereographic = new Stereographic.fromCartesian(
      Cartesian3.fromDegrees(30.0, -60.0)
    );
    expect(stereographic.x).toEqualEpsilon(0.1347555369, CesiumMath.EPSILON7);
    expect(stereographic.y).toEqualEpsilon(-0.2334034365, CesiumMath.EPSILON7);
    expect(stereographic.tangentPlane).toEqual(
      Stereographic.SOUTH_POLE_TANGENT_PLANE
    );
  });

  it("can get longitude from a Stereographic in the northern hemisphere", function () {
    let stereographic = new Stereographic.fromCartesian(
      Cartesian3.fromDegrees(30.0, 60.0)
    );
    expect(stereographic.longitude).toEqualEpsilon(
      CesiumMath.toRadians(30.0),
      CesiumMath.EPSILON7
    );

    stereographic = new Stereographic.fromCartesian(
      Cartesian3.fromDegrees(60.0, 30.0)
    );
    expect(stereographic.longitude).toEqualEpsilon(
      CesiumMath.toRadians(60.0),
      CesiumMath.EPSILON7
    );

    stereographic = new Stereographic.fromCartesian(
      Cartesian3.fromDegrees(-60.0, 30.0)
    );
    expect(stereographic.longitude).toEqualEpsilon(
      CesiumMath.toRadians(-60.0),
      CesiumMath.EPSILON7
    );

    stereographic = new Stereographic.fromCartesian(
      Cartesian3.fromDegrees(-135.0, 60.0)
    );
    expect(stereographic.longitude).toEqualEpsilon(
      CesiumMath.toRadians(-135.0),
      CesiumMath.EPSILON7
    );

    stereographic = new Stereographic.fromCartesian(
      Cartesian3.fromDegrees(135.0, 60.0)
    );
    expect(stereographic.longitude).toEqualEpsilon(
      CesiumMath.toRadians(135.0),
      CesiumMath.EPSILON7
    );
  });

  it("can get longitude from a Stereographic in the southern hemisphere", function () {
    let stereographic = new Stereographic.fromCartesian(
      Cartesian3.fromDegrees(30.0, -60.0)
    );
    expect(stereographic.longitude).toEqualEpsilon(
      CesiumMath.toRadians(30.0),
      CesiumMath.EPSILON7
    );

    stereographic = new Stereographic.fromCartesian(
      Cartesian3.fromDegrees(60.0, -30.0)
    );
    expect(stereographic.longitude).toEqualEpsilon(
      CesiumMath.toRadians(60.0),
      CesiumMath.EPSILON7
    );

    stereographic = new Stereographic.fromCartesian(
      Cartesian3.fromDegrees(-60.0, -30.0)
    );
    expect(stereographic.longitude).toEqualEpsilon(
      CesiumMath.toRadians(-60.0),
      CesiumMath.EPSILON7
    );

    stereographic = new Stereographic.fromCartesian(
      Cartesian3.fromDegrees(-135.0, -60.0)
    );
    expect(stereographic.longitude).toEqualEpsilon(
      CesiumMath.toRadians(-135.0),
      CesiumMath.EPSILON7
    );

    stereographic = new Stereographic.fromCartesian(
      Cartesian3.fromDegrees(135.0, -60.0)
    );
    expect(stereographic.longitude).toEqualEpsilon(
      CesiumMath.toRadians(135.0),
      CesiumMath.EPSILON7
    );
  });

  it("can get conformal latitidude from a Stereographic in the northern hemisphere", function () {
    let stereographic = new Stereographic.fromCartesian(
      Cartesian3.fromDegrees(30.0, 60.0)
    );
    expect(stereographic.conformalLatitude).toEqualEpsilon(
      1.04428418,
      CesiumMath.EPSILON7
    );

    stereographic = new Stereographic.fromCartesian(
      Cartesian3.fromDegrees(60.0, 30.0)
    );
    expect(stereographic.conformalLatitude).toEqualEpsilon(
      0.52069517,
      CesiumMath.EPSILON7
    );
  });

  it("can get conformal latitidude from a Stereographic in the southern hemisphere", function () {
    let stereographic = new Stereographic.fromCartesian(
      Cartesian3.fromDegrees(30.0, -60.0)
    );
    expect(stereographic.conformalLatitude).toEqualEpsilon(
      -1.04428418,
      CesiumMath.EPSILON7
    );

    stereographic = new Stereographic.fromCartesian(
      Cartesian3.fromDegrees(60.0, -30.0)
    );
    expect(stereographic.conformalLatitude).toEqualEpsilon(
      -0.52069517,
      CesiumMath.EPSILON7
    );
  });

  it("can get latitidude from a Stereographic in the northern hemisphere", function () {
    let stereographic = new Stereographic.fromCartesian(
      Cartesian3.fromDegrees(30.0, 60.0)
    );
    expect(stereographic.getLatitude()).toEqualEpsilon(
      CesiumMath.toRadians(60.0),
      CesiumMath.EPSILON7
    );

    stereographic = new Stereographic.fromCartesian(
      Cartesian3.fromDegrees(60.0, 30.0)
    );
    expect(stereographic.getLatitude()).toEqualEpsilon(
      CesiumMath.toRadians(30.0),
      CesiumMath.EPSILON7
    );
  });

  it("can get latitidude from a Stereographic in the southern hemisphere", function () {
    let stereographic = new Stereographic.fromCartesian(
      Cartesian3.fromDegrees(30.0, -60.0)
    );
    expect(stereographic.getLatitude()).toEqualEpsilon(
      CesiumMath.toRadians(-60.0),
      CesiumMath.EPSILON7
    );

    stereographic = new Stereographic.fromCartesian(
      Cartesian3.fromDegrees(60.0, -30.0)
    );
    expect(stereographic.getLatitude()).toEqualEpsilon(
      CesiumMath.toRadians(-30.0),
      CesiumMath.EPSILON7
    );
  });
});
